import styled from "styled-components";
import BookCards from "../../Components/Card/BookCards";
import { departments } from "../../damodata";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { primaryColor } from "../../Components/Color/Color";
const CartHome = () => {
  return (
    <>
      <Div>
        {Object.keys(departments).map((department) => (
          <BookCards
            key={department}
            department={department}
            books={departments[department]}
          />
        ))}
        <Link to="/adsForm">
          <AddOption>
            <MdOutlineAddCircle className=" shadow-2xl" />
          </AddOption>
        </Link>
      </Div>
    </>
  );
};

export default CartHome;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 90px;
`;
const AddOption = styled.div`
  font-size: 50px;
  position: fixed;
  z-index: 50;
  bottom: 55px;
  right: 10px;
  color: ${primaryColor};
  margin-bottom: 30ppx;
  background: white;
  border-radius: 100%;
`;
