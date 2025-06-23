import React from "react";
import AdvertisingContainer from "../../Module/Home/AdvertisingContainer";

interface AdBarProps {
  visible: boolean;
}

const AdBar: React.FC<AdBarProps> = ({ visible }) => (
  <div
    className={`overflow-hidden transition-all duration-500 ease-in-out`}
    style={{
      opacity: visible ? 1 : 0,
      height: visible ? "36px" : "0px",
      paddingTop: visible ? "0px" : "0px",
      paddingBottom: visible ? "4px" : "0px",
    }}
  >
    <AdvertisingContainer />
  </div>
);

export default AdBar;
