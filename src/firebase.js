import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyASqOEZCSH0tRdcevP7xnEL4fZSHiffLu0",
	authDomain: "netflix-clone-c32d1.firebaseapp.com",
	projectId: "netflix-clone-c32d1",
	storageBucket: "netflix-clone-c32d1.appspot.com",
	messagingSenderId: "343033101794",
	appId: "1:343033101794:web:74a2e15a1badbd459ccdbb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// you can have many explicit export but only one default export
export { auth };
export default db;
