const validator = require('validator');

export const validateSignUpData = (req) => {
    const { firstName, lastName, emailId, password} = req.body;

    if(!validator.isEmail(emailId)) {
        throw new Error('Invalid email format');
    }
    else if(!validator.isStrongPassword(password)) {
        throw new Error('Password is not strong enough');
    }
    
    
}