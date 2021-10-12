import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

export default function LeftSidebar() {
  return (
    <div id="left-sidebar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faHouse} />
          Home
        </li>
        <li>
          <FontAwesomeIcon icon={faHashtag} />
          Explore
        </li>
        <li>
          <FontAwesomeIcon icon={faBell} />
          Notification
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          Messages
        </li>
        <li>
          <FontAwesomeIcon icon={faBookmark} />
          Bookmarks
        </li>
        <li>
          <FontAwesomeIcon icon={faList} />
          Lists
        </li>
        <li>
          <FontAwesomeIcon icon={faEllipsis} />
          More
        </li>
      </ul>
    </div>
  );
}
