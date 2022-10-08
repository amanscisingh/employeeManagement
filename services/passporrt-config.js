const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(password, getUserByEmail, getUserByEmail) {
    const authenicateUser = async (email, password, done) => {
        const user = await getUserByEmail(email);
        if (user == null) {
            return done(null, false, { message: 'No user with that email'});
        }

        try {
            if( bcrypt.compare(password, user.password) ) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password incorrect' })
            }

        } catch (error) {
            return done(error);
        }
    }

    password.use(new LocalStrategy({ usernameField: 'email' }, authenicateUser));
    password.serializeUser((user, done) => done(null, user.id));
    password.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize;