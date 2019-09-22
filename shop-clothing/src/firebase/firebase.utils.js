import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB7WAsZc-__LAa5RWj90L95c7nXiYg2Ov8",
    authDomain: "shop-db-da168.firebaseapp.com",
    databaseURL: "https://shop-db-da168.firebaseio.com",
    projectId: "shop-db-da168",
    storageBucket: "",
    messagingSenderId: "64270204891",
    appId: "1:64270204891:web:d83d742e8f6f5b93ebb1fe"
};

export const createUserProfileDocument = async (userAuth, addData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdDate = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdDate,
                ...addData
            })
        } catch (e) {
            console.log('error creating user: ', e.massage);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;