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
    const emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
    const specificCharsRegex = new RegExp( 
        "/^([a-z0-9]|[-._]){4,20}$/"
        )
        // /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
    
    const tempObj = jettisonNull({ username, email, password })
    const { username: newUsername, email: newEmail, password: newPassword } = tempObj
    
    // console.log(tempObj)
    // const emailCheck = emailRegex.test(newEmail);
    // console.log(emailCheck)

    // password field which allows only for lowercase and uppercase letters and .!@#$%^&*()_+-=
    const usernameCheck = specificCharsRegex.test(newUsername)
    // newUsername.split('').length > 3 && newUsername.split('').length < 20 && 
    console.log(usernameCheck)
    // console.log(newUsername)
    
    // const passwordCheck = newPassword.split('').length > 7 && newPassword.split('').length < 20 && specificCharsRegex.test(newPassword)
    // console.log(passwordCheck)
    // console.log(newPassword)

    // if(emailCheck) 
    /**
        Send email a message and await email verification
        Email will not be added into account until it has been verified
     */ 
    // if(usernameCheck) // Check if username exists on database
    // if(passwordCheck) // 

    // return [
        // emailCheck, 
        // usernameCheck, 
        // passwordCheck ]
}

const jettisonNull = (userObj) => {
    const tempMap = new Map(Object.entries(userObj))
    for(let [key, value] of tempMap){
        value = value[0]
        tempMap.set(key, value)
    };    
    return Object.fromEntries(tempMap)
}



module.exports = {
    checkSensitiveInput,
    jettisonNull
}