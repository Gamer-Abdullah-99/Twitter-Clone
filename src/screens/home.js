import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import NewTweet from "../components/new-tweet";
import { auth, onAuthStateChanged, getDocs } from "../routes/fire";

export default function Home() {

  useEffect(() => {
    const querySnapshot = await getDocs(collection(db, "Tweets"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    }, []);

    return (
      <div id="home">
        <NewTweet />
        <div id="all-tweets">
          {

          }
        </div>
      </div>
    );

  })
}