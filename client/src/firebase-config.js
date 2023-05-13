import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig={

apiKey : "AIzaSyCuMILawOS0P_b4Fwe7hhvVk9FY0drLzao",
authDomain:"twitter-connection-ca5aa.firebaseapp.com",
projectId:"twitter-connection-ca5aa",
storageBucket:"twitter-connection-ca5aa.appspot.com",
messagingSenderId:"",
appId:"",

}

const app = initializeApp(firebaseConfig);

export const authentification = getAuth(app);