import styled from "styled-components";

export const BillsWrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

interface ICircle {
    value: boolean
}
export const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props: ICircle) => props.value ? "#4cea75" : "#d63f44"};
`;