/* eslint-disable react/prop-types */
import {
  BottomBarItemC,
  DivC,
  ModalBodyC,
  ModalContainerC,
  ModalContentC,
} from "../GobalStyle/GobalStyle";

const CourseDetailsM = ({ isOpen, handleClose }) => {
  return (
    <div>
      <div>
        {isOpen && (
          <ModalContainerC>
            <ModalContentC>
              <ModalBodyC>
                <DivC>
                  <BottomBarItemC>
                    <p className="text-[12px] mt-1">
                      numerical methods linear algebra
                    </p>
                    <p className="text-[12px] mt-1">course code:math320</p>
                    <p className="text-[12px] mt-1">MD: Amir Shaddat</p>
                    <p className="text-[12px] mt-1">credits:3</p>
                    <p className="text-[12px] mt-1">
                      Class Houre:1.5 (weekly 2 days)
                    </p>
                  </BottomBarItemC>
                </DivC>

                <p onClick={handleClose}>close</p>
              </ModalBodyC>
            </ModalContentC>
          </ModalContainerC>
        )}
      </div>
    </div>
  );
};

export default CourseDetailsM;
