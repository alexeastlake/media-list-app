import {getApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore, doc, setDoc, collection, firestore, addDoc, query, where, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore";
import {Alert} from "react-native";
import {modelItems, currentId} from "../../tempmodel";
import { ListItem as Item } from "./Item";

export function registerUser(email, password, confirmPassword) {
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

export async function getTypes(uid, type) {
  const db = getFirestore(getApp());

  const typeQuery = query(collection(db, "users", uid, "items"), where("type", "==", type));
  const querySnapshot = await getDocs(typeQuery);

  let items = [];
  
  querySnapshot.forEach((doc) => {items.push(doc.data()); items[items.length - 1].id = doc.id});

  return items;
}

export function getCopiedItem(id) {
  const db = getFirestore(getApp());

  for (let i = 0; i < modelItems.length; i++) {
    if (modelItems[i].id === id) {
      return copyItem(modelItems[i]);
    }
  }
}

export async function getItem(uid, id) {
  const db = getFirestore(getApp());

  const docSnapshot = await getDoc(doc(db, "users", uid, "items", id));

  let item = docSnapshot.data();
  item.id = docSnapshot.id;

  return item;
}

export function saveChange(uid, id, type, title, platform, genres, notes) {
  const db = getFirestore(getApp());

  let genresArray = genres.split(",");

  for (let i = 0; i < genresArray.length; i++) {
    genresArray[i].trim();
  }

  let item = new Item(type, title, platform, genresArray, notes);
  
  updateDoc(doc(db, "users", uid, "items", id), Object.assign({}, item)).catch(error => {Alert.alert("Error", error.message);});
}

export function addItem(uid, type, title, platform, genres, notes) {
  const db = getFirestore(getApp());

  let genresArray = genres.split(",");

  for (let i = 0; i < genresArray.length; i++) {
    genresArray[i].trim();
  }
  
  let item = new Item(type, title, platform, genresArray, notes);

  addDoc(collection(db, "users", uid, "items"), Object.assign({}, item)).catch(error => {Alert.alert("Error", error.message);});
}

function copyItem(item) {
  return new Item(item.id, item.type, item.title, item.platform, [...item.genres], item.notes);
}

export function deleteItem(uid, id) {
  const db = getFirestore(getApp());

  deleteDoc(doc(db, "users", uid, "items", id)).catch(error => {Alert.alert("Error", error.message);});
}