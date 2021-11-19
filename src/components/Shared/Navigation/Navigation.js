import React from "react";
import "./Navigation.css";
import { Settings, NotificationsNone, Language } from "@mui/icons-material";
import Badge from "@mui/material/Badge";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigationWrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel By Junaid</span>
        </div>
        <div className="topRight">
          <div className="navigationIconContainer">
            <Badge badgeContent={4} color="primary">
              <NotificationsNone />
            </Badge>
          </div>
          <div className="navigationIconContainer">
            <Badge badgeContent={4} color="primary">
              <Language />
            </Badge>
          </div>
          <div className="navigationIconContainer">
            <Settings />
          </div>
          <img src="https://i.pinimg.com/564x/5b/6f/85/5b6f85d9c380dc7c3638b3ddc690caa1.jpg" alt="" className="navAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
