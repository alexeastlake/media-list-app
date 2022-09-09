import { getApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from "firebase/firestore";
import { Alert } from "react-native";
import { ListItem as Item } from "./Item";

// Takes a potential users email and password and tries to register them with Firebase authentication.
export function registerUser(email, password) {
  const auth = getAuth(getApp());
  const db = getFirestore(getApp());

  createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      const user = response.user;

      setDoc(doc(db, "users", user.uid), {});
    })
    .catch(error => {
      Alert.alert("Error", error.message);
    });
}

// Takes an email and password and attempts to login using Firebase authentication.
export function loginUser(email, password) {
  const auth = getAuth(getApp());

  return signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      const user = response.user;

      return user.uid;
    })
    .catch(error => {
      Alert.alert("Error", error.message);
  });
}

// Gets all list items of a certain type for a given user from Firestore.
export async function getTypes(uid, type) {
  const db = getFirestore(getApp());

  const typeQuery = query(collection(db, "users", uid, "items"), where("type", "==", type));
  const querySnapshot = await getDocs(typeQuery);

  let items = [];
  
  querySnapshot.forEach((doc) => {items.push(doc.data()); items[items.length - 1].id = doc.id});

  return items;
}

// Gets an item by its document id under a users collection from Firestore.
export async function getItem(uid, id) {
  const db = getFirestore(getApp());

  const docSnapshot = await getDoc(doc(db, "users", uid, "items", id));

  let item = docSnapshot.data();
  item.id = docSnapshot.id;

  return item;
}

// Updates a document identified by its id under a users collection with the given values in Firestore.
export function saveChange(uid, id, type, title, platform, genres, notes) {
  const db = getFirestore(getApp());

  let genresArray = genres.split(",");

  for (let i = 0; i < genresArray.length; i++) {
    genresArray[i].trim();
  }

  let item = new Item(type, title, platform, genresArray, notes);
  
  updateDoc(doc(db, "users", uid, "items", id), Object.assign({}, item)).catch(error => {Alert.alert("Error", error.message);});
}

// Adds a new document to the given users items collection with the given values in Firestore.
export function addItem(uid, type, title, platform, genres, notes) {
  const db = getFirestore(getApp());

  let genresArray = genres.split(",");

  for (let i = 0; i < genresArray.length; i++) {
    genresArray[i].trim();
  }
  
  let item = new Item(type, title, platform, genresArray, notes);

  addDoc(collection(db, "users", uid, "items"), Object.assign({}, item)).catch(error => {Alert.alert("Error", error.message);});
}

// Deletes the document with the given id under a users items collection in Firestore.
export function deleteItem(uid, id) {
  const db = getFirestore(getApp());

  deleteDoc(doc(db, "users", uid, "items", id)).catch(error => {Alert.alert("Error", error.message);});
}

// Gets a random item from a given users items collection in Firestore.
export async function getRandomItem(uid) {
  const db = getFirestore(getApp());

  let colRef = collection(db, "users", uid, "items");
  const querySnapshot = await getDocs(colRef);

  let items = [];
  
  querySnapshot.forEach((doc) => {items.push(doc.data()); items[items.length - 1].id = doc.id});

  return items[Math.floor(Math.random() * items.length)];
}