import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebaseConfig";

export function adduser(email,password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function signInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function signOutUser(){
    return signOut(auth)
}

export function updateUserProfile(payload){
    return updateProfile(auth.currentUser, payload)
}