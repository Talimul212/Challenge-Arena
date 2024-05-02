import styled from "styled-components";
import { MdHomeFilled } from "react-icons/md";
import { PiNewspaperClippingBold } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { IoMdCart } from "react-icons/io";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { primaryColor } from "../Color/Color";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import BottomBarM from "../Modal/BottomBarM";
const BottomBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <MobileScroll>
        <Link onClick={handleClose} to="/" style={{ textDecoration: "none" }}>
          <HomeIcon active={location.pathname === "/"} />
        </Link>
        <Link
          onClick={handleClose}
          to="/buI/newsfeed"
          style={{ textDecoration: "none" }}
        >
          <NewspaperIcon active={location.pathname === "/news"} />
        </Link>
        <Div
          onClick={handleToggle}
          style={{
            textDecoration: "none",
            color: `${isOpen ? "#00bf63" : "gray"}`,
          }}
        >
          <PiDotsThreeCircleFill />
        </Div>
        <Link
          onClick={handleClose}
          to="/buI/messages"
          style={{ textDecoration: "none" }}
        >
          <MessagesIcon active={location.pathname === "/messages"} />
        </Link>
        <Link
          onClick={handleClose}
          to="/buySell"
          style={{ textDecoration: "none" }}
        >
          <CartIcon
            onClick={handleToggle}
            active={location.pathname === "/buySell"}
          />
        </Link>
      </MobileScroll>
      <BottomBarM handleClose={handleClose} isOpen={isOpen} />
    </>
  );
};

export default BottomBar;
const MobileScroll = styled.div`
  font-size: 25px;

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

const HomeIcon = styled(MdHomeFilled)`
  color: ${(props) => (props.active ? primaryColor : "gray")};
`;

const NewspaperIcon = styled(PiNewspaperClippingBold)`
  color: ${(props) => (props.active ? primaryColor : "gray")};
`;

const MessagesIcon = styled(LuMessagesSquare)`
  color: ${(props) => (props.active ? primaryColor : "gray")};
`;

const CartIcon = styled(IoMdCart)`
  color: ${(props) => (props.active ? primaryColor : "gray")};
`;

const Div = styled.div``;
