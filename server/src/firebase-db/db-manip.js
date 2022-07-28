const { collectionRef } = require('./firebase.config')

const addUser = async(userObj) => {
    const docRef = collectionRef.doc('alovelace');
    await docRef.set(userObj);
}

// URL CRUD Operations

