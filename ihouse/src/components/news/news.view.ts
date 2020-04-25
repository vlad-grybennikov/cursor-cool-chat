import styled from "styled-components";

const NO_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png";
export const NewsWrapper = styled.div`
   width: 90%;
   margin-left: auto;
   margin-right: auto;
`;
export const NewsInnerWrapper = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
`;
export const SingleNewsWrapper = styled.div`
  max-width: 750px;
  width: calc(50% - 20px);
  margin-right: 20px;
  margin-bottom: 40px;
`;
export const NewsDate = styled.div`
  color: #999;
  font-weight: 300; 
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 15px;
`;
export const NewsTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 0;
`;
export const NewsContent = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-top: 30px;
  line-height: 1.5;
`;

interface INewsImage {
    image: string
}

export const NewsImage = styled.div`
  background-image: url(${(props: INewsImage) => {
    return props.image ? props.image : NO_IMAGE
}});
  background-size: cover;
  background-position:50% 50%;
  width: 100%;
  padding-top: 50%;
`;
