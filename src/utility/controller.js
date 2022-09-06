import {getApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore, doc, setDoc, collection, firestore, addDoc, query, where, getDocs} from "firebase/firestore";
import {Alert} from "react-native";
import {modelItems, currentId} from "../../tempmodel";
import { ListItem } from "./ListItem";

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
  
  querySnapshot.forEach((doc) => {items.push(doc.data())});

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

export function getItem(id) {
  const db = getFirestore(getApp());

  for (let i = 0; i < modelItems.length; i++) {
    if (modelItems[i].id === id) {
      return modelItems[i];
    }
  }
}

export function saveChange(id, title, platform, genres, notes) {
  const db = getFirestore(getApp());
  let item = getItem(id);
  
  item.title = title;
  item.platform = platform;
  item.genres = genres.split(", ");
  item.notes = notes;
}

export function addItem(uid, type, title, platform, genres, notes) {
  const db = getFirestore(getApp());

  let genresArray = genres.split(",");

  for (let i = 0; i < genresArray.length; i++) {
    genresArray[i].trim();
  }
  
  let item = new ListItem(type, title, platform, genresArray, notes);

  addDoc(collection(db, "users", uid, "items"), Object.assign({}, item)).catch(error => {Alert.alert("Error", error.message);});
}

function copyItem(item) {
  return new ListItem(item.id, item.type, item.title, item.platform, [...item.genres], item.notes);
}

export function deleteItem(id) {
  const db = getFirestore(getApp());

  for (let i = 0; i < modelItems.length; i++) {
    if (modelItems[i].id === id) {
      modelItems.splice(i, 1);
    }
  }
}