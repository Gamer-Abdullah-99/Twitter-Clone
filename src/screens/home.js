import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/context";
import NewTweet from "../components/new-tweet";

export default function Home() {
  return (
    <div id="home">
      <NewTweet />
      <div id="">
          <h1>All Tweets</h1>
      </div>
    </div>
  );
}
