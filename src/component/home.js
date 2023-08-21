import { BiSearch, BiMenu, BiBell } from "react-icons/bi";
import {
  AiOutlineDoubleLeft,
  AiOutlineTags,
  AiOutlineLike,
  AiOutlineRight,
} from "react-icons/ai";
import { PiUsers } from "react-icons/pi";
import { CiMoneyBill } from "react-icons/ci";

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
        <div className="homepagefourcardcontainer">
          <div className="homepagefourcard aliceblue">
            <div className="homepagefourcontainericontag">
              <CiMoneyBill />
            </div>

            <p className="homepagefourcardparatag">Total Revenues</p>
            <h2>$2,129,430</h2>
          </div>
          <div className="homepagefourcard antiquewhite">
            <div className="homepagefourcontainericontag">
              <AiOutlineTags />
            </div>

            <p className="homepagefourcardparatag">Total Transactions</p>
            <h2>1,520</h2>
          </div>
          <div className="homepagefourcard gray">
            <div className="homepagefourcontainericontag">
              <AiOutlineLike />
            </div>

            <p className="homepagefourcardparatag">Total Likes</p>
            <h2>9,721</h2>
          </div>
          <div className="homepagefourcard aqua">
            <div className="homepagefourcontainericontag">
              <PiUsers />
            </div>

            <p className="homepagefourcardparatag">Total Users</p>
            <h2>892</h2>
          </div>
        </div>
        <div className="homepagegrapharea">
          <div>Activities</div>
        </div>
        <div className="homepagepichartrow">
          <div className="piechartcontainer">cart area</div>
          <div className="piechartcontainer schedulearea">
            <div className="sheduleareatitleandseeallrow">
              <h2 className="scheduleareatitle">Today's schedule</h2>
              <div className="graytext scheduleareaseeall">
                see all <AiOutlineRight />
              </div>
            </div>
            <div className="homepageschedulebox homepagescheduleboxyellow">
              <div>Meeting with suppliers from Kuta Bali</div>
              <div className="graytext">14.00 - 15.00</div>
              <div className="graytext">at Sunset Road, Kuta, Bali.</div>
            </div>
            <div className="homepageschedulebox homepagescheduleboxblue">
              <div>Check operation at Giga Factory 1</div>
              <div className="graytext">18.00 - 20.00</div>
              <div className="graytext">at Central Jakarta</div>
            </div>
          </div>
        </div>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
}
