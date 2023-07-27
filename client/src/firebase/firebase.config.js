import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
}



export const app = initializeApp(firebaseConfig)



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyABl8XxUIm1UZjWe_ogiS3TF-AScsn-wIw",
//   authDomain: "aircnc-projects-59fb2.firebaseapp.com",
//   projectId: "aircnc-projects-59fb2",
//   storageBucket: "aircnc-projects-59fb2.appspot.com",
//   messagingSenderId: "128342743177",
//   appId: "1:128342743177:web:d01ab42886495dcddd8e58"
// };

// // // Initialize Firebase
// export const app = initializeApp(firebaseConfig);