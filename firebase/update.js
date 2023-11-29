import { collection, addDoc, getFirestore, setDoc, doc,getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";

const [userName, setUserName] = useState("");
const [avatar, setAvatar] = useState("");
const [wimPoints, setWimPoints] = useState("");
const [prog, setProg] = useState("");

export const getUser = async () => {
    const userProfile = getAuth();

    const docRef = doc(db, "users", userProfile.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
        console.log("Document Data: ", docSnap.data());
        const user = docSnap.data();
        setUserName(user.userName);
        setAvatar(user.avatar);
        setWimPoints(user.wimPoints);
        setProg(user.prog);
    } else {
        console.log("No such document!");
    }
}

useEffect(() => {
    getUser();
}, []);

export const editUser = async () => {
    const userCreds = getAuth();
    const userRef = doc(db, "users", userCreds.currentUser.uid);
    setDoc(
        userRef,
        {
            userName: userName,
            avatar: avatar,
            wimPoints: wimPoints,
            prog: prog
        },
        { merge: true }
    )
}