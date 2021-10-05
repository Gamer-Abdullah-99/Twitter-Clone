import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/context";

export default function Home() {
  return (
    <div id="home">
      <div id="newTweet">
        <input placeholder="What's on your mind ?" />
      </div>
    </div>
  );
}
