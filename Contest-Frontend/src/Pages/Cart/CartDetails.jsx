import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { departments } from "../../damodata";
const CartDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [selectedItem, setSelectedItem] = useState(null);

  const findItemById = (itemId) => {
    for (const department in departments) {
      const item = departments[department].find((item) => item.id === itemId);

      if (item) {
        return item;
      }
    }

    return null;
  };

  useEffect(() => {
    const itemId = parseInt(id);

    const foundItem = findItemById(itemId);

    setSelectedItem(foundItem);
  }, [id]);

  return (
    <Container>
      {selectedItem && (
        <>
          <Div>
            <Link
              className=" text-white p-3 text-2xl ms-5 mt-4 fixed bg-[#2020209f] rounded-full "
              to="/buysell"
            >
              <IoMdArrowBack />
            </Link>

            <img
              src={selectedItem.image_url}
              className="h-[66vh] w-full"
              alt={selectedItem.name}
            />

            <h2 className="text-black ps-5">{selectedItem.name}</h2>
            <p className="ms-5 px-2 text-white bg-[#38b6ff]">
              <span className="text-3xl font-bold"> ৳ </span>
              {selectedItem.price}
            </p>
          </Div>
          <Div1>
            <p className="text-black">
              <span className="font-bold">Sold by: </span>
              <span className="text-gray-800"> {selectedItem.author}</span>
            </p>
            <p className="my-[-15px] text-black">
              <span className="font-bold">Posted: </span>
              <span className="text-gray-800"> Dec 16 at 5:50 AM </span>
            </p>
            <p className="text-black">
              <span className="font-bold">Category: </span>
              <span className="text-gray-800"> CSE</span>
            </p>
            {/* Add other details as needed */}
          </Div1>
          <Div1>
            <p className="text-black">Description </p>
            <p className="text-black">{selectedItem.title}</p>
          </Div1>
        </>
      )}
    </Container>
  );
};

export default CartDetails;
const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;

  display: flex;
  background: #d6d6d6;
  justify-content: space-between;
  flex-direction: column; /* Adjust as needed */
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  padding-bottom: 20px;
  background: white;
  color: #9b98983d;
  font-size: 20px;
  font-weight: 500;
  li {
    cursor: pointer;
  }
`;
const Div1 = styled.div`
  padding: 15px 0 15px 0;
  margin-top: 18px;
  display: flex;
  padding-left: 20px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  background: white;
  color: #0000003c;
  font-size: 17px;
  font-weight: 500;
`;
