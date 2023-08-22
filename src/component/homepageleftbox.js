import { Link } from "react-router-dom";
import {
  AiOutlinePieChart,
  AiFillSchedule,
  AiOutlineTags,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";

const Leftcontainer = () => {
  return (
    <div className="homepageleftcontainer">
      <div className="homepagelogoname">Board.</div>
      <div className="homepagelinkcontainer">
        <Link to="/" className="homepageleftboxlink">
          <AiOutlinePieChart />
          <div className="homepageleftboxlinklable">Dashboard</div>
        </Link>
        <Link to="*" className="homepageleftboxlink">
          <AiOutlineTags />
          <div className="homepageleftboxlinklable">Transactions</div>
        </Link>
        <Link to="*" className="homepageleftboxlink">
          <AiFillSchedule />
          <div className="homepageleftboxlinklable">Schedules</div>
        </Link>
        <Link to="*" className="homepageleftboxlink">
          <BiUserCircle />
          <div className="homepageleftboxlinklable">Users</div>
        </Link>
        <Link to="*" className="homepageleftboxlink">
          <LuSettings />
          <div className="homepageleftboxlinklable">Settings</div>
        </Link>
      </div>
      <div className="homepageleftcontactuscontainer">
        <Link className="homepageleftboxlink" to="*">
          Help
        </Link>
        <Link className="homepageleftboxlink" to="*">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Leftcontainer;
