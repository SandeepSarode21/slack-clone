import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase.js";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    /*async function fetchData() {
      const rooms = collection(db, "rooms");
      const snapshot = await getDocs(rooms);
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    }
    fetchData();*/
    onSnapshot(collection(db, "rooms"), (snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          name: doc.data().name,
          id: doc.id,
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Sandeep Sarode
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="Files Browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Scroll less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption
        Icon={AddIcon}
        title="Add Channels"
        id="add"
        addChannelOption="add"
      />
      {/**connect to db and list all channnels */}

      {channels.map((channel) => (
        <SidebarOption title={channel.name} key={channel.id} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
