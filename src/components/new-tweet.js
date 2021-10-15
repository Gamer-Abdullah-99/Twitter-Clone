import React, { useState, useContext } from "react";
import {
  setDoc,
  db,
  doc,
} from '../routes/fire'
import { GlobalContext } from "../context/context";
import { auth, collection, addDoc } from "../routes/fire";

export default function NewTweet() {
  const { state, dispatch } = useContext(GlobalContext);

  const date = new Date()

  const [tweet, setTweet] = useState('')

  async function addtweet() {
    console.log(tweet)
    setTweet('')
    let a = await addDoc(collection(db, "Tweets"),
      {
        authorUid: state.authUser.uid,
        authorName: state.authUser.username,
        tweet,
        time: date.toDateString()
      })
  }



  return (
    <div id="add-tweet">
      <textarea placeholder="What's On Your Mind" maxLength="250" value={tweet} onChange={(a) => { setTweet(a.target.value) }} />
      <br />
      <button onClick={addtweet}>Tweet</button>
    </div>
  );
}
