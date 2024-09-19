import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATuse2ucyY8yFaBAaz-FGIcyGOh5Alg5Q",
  authDomain: "netfilxclone-f5c95.firebaseapp.com",
  projectId: "netfilxclone-f5c95",
  storageBucket: "netfilxclone-f5c95.appspot.com",
  messagingSenderId: "1075051897738",
  appId: "1:1075051897738:web:6dcba11a22ac510bc01e73",
  measurementId: "G-LFZL4LNSHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch(error){
        console.log(error);
        alert(error)
    };
}

const login = async ()=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);

    }catch(error){
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};