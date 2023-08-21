import { BiSearch, BiMenu, BiBell } from "react-icons/bi";
import { AiOutlineDoubleLeft } from "react-icons/ai";

import Leftcontainer from "./homepageleftbox";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Home() {
  const [sidebarstate, setsidebarstate] = useState(false);

  return (
    <div className="homepageparentcontainer">
      <div className="bigscreen">
        <Leftcontainer />
      </div>
      <div
        className={
          sidebarstate
            ? "smallscreen smallscreenshow"
            : "smallscreen smallscreenhide"
        }
      >
        <Leftcontainer />
        <button
          type="button"
          onClick={() => {
            setsidebarstate(false);
          }}
          className="homepageleftboxhamburgericon2"
        >
          <AiOutlineDoubleLeft />
        </button>
      </div>
      <div className="homepagerighcontainer">
        <button
          type="button"
          onClick={() => {
            setsidebarstate(true);
          }}
          className="homepagerightboxhamburgericon"
        >
          <BiMenu />
        </button>
        <div className="homepageheadtag">
          <div className="homepagerightboxiconbox bigscreenheading">
            Dashboard
          </div>
          <div className="homepagerightboxrightcontent">
            <div className="homepagerightboxiconbox smallscreenheading">
              Dashboard
            </div>
            <div className="bigscreensearchtag">
              <div className="homepagesearchbarinputcontainer">
                <input
                  className="homepagerightboxsearchtag"
                  placeholder="Search..."
                />
                <button className="homepagerightboxsearchbutton" type="button">
                  <BiSearch />
                </button>
              </div>
            </div>
            <div className="bellicon">
              <BiBell />
            </div>
            <div className="homepageuserimagecontainer">
              <img
                className="homepageuserimage"
                src="https://media.nngroup.com/media/people/photos/2022-portrait-page-3.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg"
                alt="userimage"
              />
            </div>
          </div>
        </div>
        <div className="smallscreeninputcontainer">
          <div className="homepagesearchbarinputcontainer">
            <input
              className="homepagerightboxsearchtag"
              placeholder="Search..."
            />
            <button className="homepagerightboxsearchbutton" type="button">
              <BiSearch />
            </button>
          </div>
        </div>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
}
