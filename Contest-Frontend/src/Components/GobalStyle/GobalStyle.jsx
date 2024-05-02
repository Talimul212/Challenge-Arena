import styled from "styled-components";
import { primaryColor } from "../Color/Color";

export const ModalContent = styled.div`
  background-color: white;
  position: absolute;

  bottom: 0px;
  padding: 20px;
  width: 100vw;
  height: 71vw;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ModalBody = styled.div`
  display: grid;
  gap: 22px;
  grid-template-columns: auto auto auto auto;
`;
export const ModalContainer = styled.div`
  position: fixed;

  bottom: 50px;
  left: 0;
  width: 100%;
  height: 100vh; /* Adjust as needed */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  z-index: 900;
  position: fixed;
  justify-content: center;
  align-items: center;
`;
export const Div = styled.div`
  li {
    display: flex;
    align-items: center;
  }
`;
export const BottomBarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  color: gray;
  &:hover {
    color: ${primaryColor};
  }
`;

// CourseModal

export const ModalContainerC = styled.div`
  position: fixed;

  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100vh; /* Adjust as needed */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  z-index: 900;
  position: fixed;
  justify-content: center;
  align-items: center;
`;
export const ModalContentC = styled.div`
  background-color: white;
  position: absolute;
  bottom: 200px;
  padding: 20px;
  width: 85vw;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ModalBodyC = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DivC = styled.div`
  li {
    display: flex;
    align-items: center;
  }
`;
export const BottomBarItemC = styled.div`
  color: gray;
`;

// CompleteCourseCSS
export const ModalContainerCE = styled.div`
  position: fixed;

  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100vh; /* Adjust as needed */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  z-index: 900;
  position: fixed;
  justify-content: center;
  align-items: center;
`;
export const ModalContentCE = styled.div`
  background-color: white;
  position: absolute;
  bottom: 290px;
  padding: 18px;
  width: 94vw;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ModalBodyCE = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DivCE = styled.div`
  li {
    display: flex;
    align-items: center;
  }
`;
export const BottomBarItemCE = styled.div`
  color: gray;
`;

// Tutores Modal
export const ModalContentTUT = styled.div`
  background-color: white;
  position: absolute;

  bottom: 0px;
  padding: 20px;
  width: 100vw;
  height: 85vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ModalBodyTUT = styled.div`
  display: grid;
  gap: 22px;
  grid-template-columns: auto auto auto auto;
`;
export const ModalContainerTUT = styled.div`
  position: fixed;

  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100vh; /* Adjust as needed */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  z-index: 900;
  position: fixed;
  justify-content: center;
  align-items: center;
`;
