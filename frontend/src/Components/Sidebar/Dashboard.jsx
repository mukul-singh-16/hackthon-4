/* eslint-disable react/prop-types */
import News from "../News/News";
import Navbar from "./Navbar";
import { useRecoilValue } from "recoil";
import { sidbarrendervalue } from "../../store/atom/sidebarRender";
import Chat from "../ChatApp/Chat";
// import Info from "../CropSutablity/Info";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  const value = useRecoilValue(sidbarrendervalue);

  return (
    <div className={`${sidebarToggle ? "" : " ml-64 "} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />

      {/* Main DashBoard Body */}

      {value == "news" && <News></News>}
      
      {value == "chat" && <Chat></Chat>}
      {/* {value == "info" && <Info />} */}
    </div>
  );
};

export default Dashboard;
