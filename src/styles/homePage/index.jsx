import styled, { keyframes } from "styled-components";

export const HomePageContainer = styled.div`
  background: linear-gradient(to bottom, #c2d4d0, #d5d6ce);
  max-width: 2600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
`;

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeIntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  margin-right: 10px;
`;

export const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

export const FilterButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const ProductWrapper = styled.div`
  width: 100%;
`;

export const CardContainer = styled.div`
  max-width: 300px;
  width: 100%;
`;

export const Card = styled.div`
  max-width: 300px;
  width: 100%;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const CardDetails = styled.div`
  padding: 16px;

  p {
    margin: 8px 0;
    text-align: center;
    font-size: 16px;
  }
`;

export const SizeOptions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  p {
    border: 2px solid black;
    padding: 10px;
    border-radius: 20px;
    font-size: 14px;

    &.selected {
      background-color: #007bff;
      color: white;
    }
  }
`

export const Like=styled.div`
  position: relative;
  top: -330px;
  right: 0;
  cursor: pointer;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  transition: background-color 0.3s ease; 
  width: 30px;
  height: 30px;

  svg {
    font-size: 18px;
  }
`

const slideIn = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`

export const PopUpContainer = styled.div`
  position: absolute;
  width: 100px;
  background-color: red;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  animation: ${({ show }) => (show ? slideIn : slideOut)} 1.5s ease-in-out;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(100%)')};
`

export const CartContainer=styled.div`
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: white;
  border-radius: 50%;
  padding: 25px;
  transition: all 0.3s ease;

  svg{
    font-size: 25px;
    color: black;
  }
`

export const Count=styled.p`
  position: absolute;
  top: 10px;
  right: 15px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px; 
  font-size: 12px;
  transition: all 0.3s ease; 
`