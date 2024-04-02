/* eslint-disable react/prop-types */
import { bottomBarData } from "../../damodata";
import { Link } from "react-router-dom";
import {
  BottomBarItem,
  Div,
  ModalBody,
  ModalContainer,
  ModalContent,
} from "../GobalStyle/GobalStyle";

const BottomBarM = ({ isOpen }) => {
  return (
    <div>
      {isOpen && (
        <ModalContainer>
          <ModalContent>
            <ModalBody>
              {bottomBarData.map((item, index) => (
                <Div key={index}>
                  <Link to={`${item.route}`}>
                    <BottomBarItem>
                      <div className="bg-gray-200  p-2 rounded-full text-gray">
                        <item.icon size={25} />
                      </div>
                      <p className="text-[12px] mt-1">{item.title}</p>
                    </BottomBarItem>
                  </Link>
                </Div>
              ))}
            </ModalBody>
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  );
};

export default BottomBarM;
