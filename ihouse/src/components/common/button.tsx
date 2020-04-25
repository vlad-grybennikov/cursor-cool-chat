import styled from "styled-components";

const Button = styled.button`
  width: 100%; 
  color: #fff;
  height: 60px;
  font-weight: 300;
  background-color:#765d9f;
  margin-top: 15px;
  margin-bottom: 15px;
  border: none;
  display: block;
  cursor: pointer;  
  &:hover{
    filter: brightness(80%);
  }
  &:active{
    outline: none;
    filter: brightness(100%);
    background-color:#a984e3;
  }
  &:focus {
      outline: none;
  }
`;

export default Button;