# Employee Management Prototype
* Single sign in for both Admin and Employee (used role based access to identify employee and admin)
* Parallel Dashboard for Employee and Admins to monitor daily tasks
![1](https://user-images.githubusercontent.com/68449680/202599593-452df3b4-d5ad-45b4-b130-9e31e76233cb.png)
![2](https://user-images.githubusercontent.com/68449680/202599610-8d470b12-42ba-4b99-a369-97b605a2d6ed.png)
* Admin can create Employee credentials and also restrict their activity on the employee
* Employee and Admin bothe can view their daily and weekly aggregate working hours in forms of pie charts and graph charts
![3](https://user-images.githubusercontent.com/68449680/202600103-d6fbf767-ffeb-4fe9-b0ae-5581cf98a598.png)
* <b> Frontend Technologies: React Js, Redux, React Charts (pie and bar) </b>
* <b> Backend Technologies: Node Js, Express JS, Login implemented via (bcrypt.js and JWT Token) </b>
* <b> Database: MongoDb </b>

# Getting Started Locally
* Step 1
Clone the repo or fork it

* Step 2 (Run the backend server)
  
```
  npm install
  npm run dev
```
 This Will set the backend server for you on localhost:4000
 
* Step 3 (Run the frontend server)
```
  cd dashboard
  npm install
  npm install redux
  npm start
 ```
 This will set the react server running for you in localhost:3000

# Live Web App
<p> Go to: https://employee-management-007.netlify.app/ </p>

# Folder Structure
```

--config
   --.env
--controllers
   --AuthControllers.js
--middleware
   --authenticate.js
--models
   --Tasks.js
   --User.js
--routes
  --api.js
  --auth.js
--dashboard (the react-redux code is in this folder)
  --public
    --favicon
    --index.html
    --logo192.png
    --logo512.png
    --manifest.json
    --robots.txt
  --src
    --actions
      --apiActions.js
    --components
      --Admin
        --AddUser.css
        --Dashboard.js
        --Modal.js
        --Setting.js
      --Employee
        --AddTask.css
        --AllTasks.js
        --BarChart.js
        --PieChart.js
        --Dashboard.js
        --Setting.js
      --AdminDashboard.js
      --Dashboard.js.js
      --EmployeeDashboard.js
      --Login.js
    --reducers
      --dataReducer.js
      --userReducer.js
      --rootReducer.js
    --App.css
    --App.js
    --index.js
    --index.css
    --logo.svg
    --reportWebVitals.js
    --setupTests.js
  --package.json
  --package-lock.json
--.gitignore
--package.json
--package-lock.json
--README
--index.js (root folder for backend)
```


# Deployment
* Frontend:  [Netlify Link](https://employee-management-007.netlify.app/)
* Backend: [Heroku Link](https://employee-management-007.herokuapp.com)

# Root Admin Login Credentials
```
email: test@t.com
password: abcd1234
```

# Employee login credentials
* Login as root admin
* Create an Employee credential
* Logout and relogin using the employee credential that you just created

# Sample Employee login credentials
```
email: ramesh@t.com
password: 1234
```
