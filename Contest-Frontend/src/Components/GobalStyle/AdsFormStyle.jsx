import styled from "styled-components";
import { InputColor, primaryColor } from "../Color/Color";

export const Container = styled.div`
  max-width: 95%;
  margin: 0 auto;
  margin-top: 5px;
  display: flex;

  justify-content: space-between;
  flex-direction: column; /* Adjust as needed */
`;
export const Div = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  color: gray;
  font-size: 20px;
  font-weight: 500;
  li {
    cursor: pointer;
  }
`;
export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  width: 55%;
  height: 180px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
  background: ${InputColor};
`;
export const DivPerson = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  width: 90px;
  height: 100px;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 20px;
  background: ${InputColor};
`;
export const Divim = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 55%;
  height: 180px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 58%;
  margin-top: -30px;
  margin-right: -160px;
`;

export const Form = styled.form`
  margin-top: 1cqh;
`;
export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;
`;
export const FieldName = styled.p`
  color: #9b9b9b;
`;
export const Input = styled.input`
  margin-top: -5px;
  padding: 5px 0;
  font-size: 15px;
  border: none;
  color: #4b4a4a;
  outline: none;
  width: 100%;
  border-radius: 0;
  border-bottom: 1px solid black;
  background: transparent;
`;

export const Title = styled.p`
  font-weight: 800;
  color: #7c7b7b;
  margin-top: 20px;
  margin-bottom: 5px;
`;
export const Button = styled.button`
  margin-top: 20px;
  position: fixed;
  color: ${primaryColor};
  padding: 15px;
  border: none;
  font-size: 45px;
  border-radius: 10px;
  cursor: pointer;
  right: 10px;

  bottom: 0px;
`;
