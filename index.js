const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

require('dotenv').config({ path: './config/.env' })

// imports for the file upload feature
const crypto = require('crypto');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const authenticate = require('./middleware/authenticate');

const app = express();
const URL = process.env.MONGODB_URI.toString();
const PORT = process.env.PORT || 8500;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch(err => {console.error(err)});

// using body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// for file UPLOAD
const con = mongoose.createConnection(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true 
});

con.then( () => { 
    console.log(`Files upload DB is connected as well!!!`) 
})

//INIT gfs
let gfs;
con.once('open', () => {
    //initialize stream
    gfs = Grid(con.db, mongoose.mongo);
    gfs.collection('uploads');
});


//create storage engine
const storage = new GridFsStorage({
    url: URL,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
}   
});   
const upload = multer({ storage });

app.use(cors());
app.use(methodOverride('_method'));


app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res,) => {
    res.send('Hello World');
});
app.use('/api', require('./routes/api'));
app.use('/auth', require('./routes/auth'));

app.post('/image/upload', upload.single('file'), (req, res) => {
    try {
        console.log('post request received');
        res.send({ file: req.file });
    } catch (error) {
        res.send(error);
    }
})

app.get('/image/app', (req, res) => {
    gfs.files.find().toArray((err, files) => {
      // Check if files
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: 'No files exist'
        });
      }

    // Files exist
    return res.json(files);
});
});


app.get('/image/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
        });
        }

        // // Check if image
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === 'application/pdf' || file.contentType === 'application/octet-stream' || file.contentType === 'text/plain') {
        // Read output to browser
            const readstream = gfs.createReadStream(file);
            readstream.pipe(res);
            } else {
            res.status(404).json({
                err: 'Not an image'
        });
        }
    });
});

// handling false routes
app.use(function(req, res, next) {
    res.status(404);

    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Page Not found' });
      return;
    }

    // default to plain-text. send()
    // res.type('txt').send('Not found');
});