// Check format with regex 
// If email matches regex expression ==> Send a promise to verify to the email 
// Else set email[1] to false

/**
 * 
 * Check if Email matches regex expression and exists in database
 * TRUE: Check if exists in database
 *      TRUE: Send verification to email
 * FALSE: Set Username[false]
 * 
 * Check if Username is between 3 and 20 Characters && exists
 * TRUE: Set Username[true]
 * FALSE: Set Username[false]
 * 
 * Check if Password is between 8 and 20 Characters && contains a set of allowed characters
 * TRUE: Set Username[true]
 * FALSE: Set Username[false]
 * 
 */

const checkSensitiveInput = (username, email, password) => {
    const emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    const emailCheck = emailRegex.test(email);
    const usernameCheck = username.split('').length > 3 && username.split('').length < 20 === true
    const passwordCheck = password.split('').length > 8 && password.split('').length < 20 === true

    if(emailCheck) /**
        Send email a message and await email verification
        Email will not be added into account until it has been verified
     */ 
    if(usernameCheck) // Check if username 
    if(passwordCheck)

    return [emailCheck, usernameCheck, passwordCheck]
}

module.exports = checkSensitiveInput