import styled from "styled-components";
import { MdHomeFilled } from "react-icons/md";
import { PiNewspaperClippingBold } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { IoMdCart } from "react-icons/io";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { primaryColor } from "../Color/Color";
import { Link } from "react-router-dom";
const BottomBar = () => {
  return (
    <MobileScoll>
      <Link to="/">
        <MdHomeFilled />
      </Link>
      <Link to="/">
        <PiNewspaperClippingBold />
      </Link>
      <Link to="/">
        <PiDotsThreeCircleFill />
      </Link>
      <Link to="/">
        <LuMessagesSquare />
      </Link>
      <Link to="/buySell">
        <IoMdCart />
      </Link>
    </MobileScoll>
  );
};

export default BottomBar;
const MobileScoll = styled.div`
  font-size: 25px;
  color: ${primaryColor};
  background-color: white;
  width: 100%;
  border: 1px solid #d3d3d3; /* Add your border style */
  z-index: 99;
  padding: 0.75rem; /* Equivalent to p-3 in Tailwind */
  display: flex;
  justify-content: space-between; /* Equivalent to justify-between in Tailwind */
  position: fixed;
  bottom: 0;
`;
