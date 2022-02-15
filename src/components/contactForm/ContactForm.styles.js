import styled from '@emotion/styled';

export const Form = styled.form`
  border: solid 2px black;
  width: 400px;
  height: 188px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 20px;
  margin: 0px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled.input`
  border: 2px solid #ededed;
  margin-top: 9px;
  &:focus {
    outline: none;
    border: none;
    border: 3px solid #90bff5;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  background: white;
  border-color: #ececec;
  width: 95px;
  &:hover {
    background: #4e8cf0;
  }
`;
