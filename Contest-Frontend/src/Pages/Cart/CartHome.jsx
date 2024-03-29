import styled from "styled-components";
import BookCards from "../../Components/Card/BookCards";
import { departments } from "../../damodata";

const CartHome = () => {
  return (
    <Div>
      {Object.keys(departments).map((department) => (
        <BookCards
          key={department}
          department={department}
          books={departments[department]}
        />
      ))}
    </Div>
  );
};

export default CartHome;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 90px;
`;
