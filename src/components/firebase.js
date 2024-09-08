import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const cofig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}

// initialize firebase
const app = initializeApp(cofig)

// Get auth instance
export const auth = getAuth(app);



