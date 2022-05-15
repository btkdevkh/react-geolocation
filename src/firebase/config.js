import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDL-chMeefi6MQ33E8hGmzptPsR81YhR-0",
  authDomain: "react-geolocation-43e24.firebaseapp.com",
  projectId: "react-geolocation-43e24",
  storageBucket: "react-geolocation-43e24.appspot.com",
  messagingSenderId: "204732571697",
  appId: "1:204732571697:web:3e8cb989d4a6c02c93b510"
};

initializeApp(firebaseConfig)

const store = getFirestore()

export { store }
