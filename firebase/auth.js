import {auth} from "./Config";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    confirmPasswordReset,
    signInWithCredential,
    FacebookAuthProvider,
} from "firebase/auth";

// Listen for authentication state to change.
onAuthStateChanged(auth, (user) => {
    if (user != null) {
        console.log("We are authenticated now!");
    } else {
        console.log("User signed out");
    }
});

async function register(email, password) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    return cred;
}

async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
}

async function reset(email) {
    await sendPasswordResetEmail(auth, email);
}

export {register, login, reset};
