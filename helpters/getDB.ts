import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBQYzYrxFc0GNnQumsgy4Z4fRnRr_VWJYk",
    projectId: "gth-web-tests",
    storageBucket: "gth-web-tests"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }

export const getDB = () => {
    return db;
}