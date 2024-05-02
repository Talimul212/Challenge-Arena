/* eslint-disable react/prop-types */
import TuitonForm from "../Form/TuitonForm";
import {
  ModalBodyTUT,
  ModalContainerTUT,
  ModalContentTUT,
} from "../GobalStyle/GobalStyle";
import { TiDeleteOutline } from "react-icons/ti";
const TutorsModal = ({ handleClose, isOpen }) => {
  return (
    <div>
      {isOpen && (
        <ModalContainerTUT>
          <ModalContentTUT>
            <ModalBodyTUT>
              <div
                className="flex absolute right-5  text-[#00bf63]"
                onClick={handleClose}
              >
                <TiDeleteOutline size={"25px"} />
              </div>
              <TuitonForm />
            </ModalBodyTUT>
          </ModalContentTUT>
        </ModalContainerTUT>
      )}
    </div>
  );
};

export default TutorsModal;
