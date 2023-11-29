import { collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "./firebaseConfig";

import { useState } from "react";

const [users, setUsers] = useState([])

export const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const dbUsers = [];

    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        dbUsers.push({
            ...doc.data(),
            id: doc.id
        });
    });
    
    setUsers([
        ...dbUsers
    ]);
}