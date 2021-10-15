import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import NewTweet from "../components/new-tweet";
import { auth, onAuthStateChanged, getDocs, collection, db } from "../routes/fire";

export default function Home() {

  const { state, dispatch } = useContext(GlobalContext);

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "Tweets"));
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      dispatch({ type: "ALL_TWEETS", payload: doc.data() });
    });
  }, []);

  return (
    <div id="home">
      <NewTweet />
      <div id="all-tweets">
        <div id="tweets">
          <span>
            <p id="tweet-author">Abdullah</p>
            <p id="tweet-time">18 August 2021</p>
          </span>
          <p id="tweet-content">This is my tweet</p>
        </div>
      </div>
    </div>
  );
}
