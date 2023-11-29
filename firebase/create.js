import { collection, addDoc, getFirestore, setDoc, doc,getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

import { useState } from "react";

const [userName, setUserName] = useState("");
const [avatar, setAvatar] = useState("");
const [wimPoints, setWimPoints] = useState("");
const [prog, setProg] = useState("");

export const addUser = async () => {
    const docRef = await addDoc(collection(db, "users"), {
        userName: userName,
        avatar: avatar,
        wimPoints: wimPoints,
        prog: prog
    });
    console.log("Document written with ID: ", docRef.id);
}