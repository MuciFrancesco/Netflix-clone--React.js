import React from "react";
import { Link } from "react-router-dom";
import netflixLogo from "../assets/netflix-logo.svg";
import defaultImg from "../assets/default-img.png";
import { motion } from "framer-motion";

function ProfilesManager() {
  const defaultAccount = {
    img: defaultImg,
    name: "Jon Doe",
  };

  return (
    <>
      <motion.div
        className="profileManager-div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className=" profileManager">
          <Link to="homePage">
            <img src={netflixLogo} alt="netflix-logo" />
          </Link>
        </header>
        <div className="profile-h1">
          <h1>Who watch Netflix?</h1>
        </div>
        <div className="profiles">
          <div className="profile">
            <Link to="/homePage">
              <img src={defaultAccount.img} alt="profile-img" />
              <p>{defaultAccount.name}</p>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProfilesManager;
