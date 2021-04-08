import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 16rem;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 1.25rem;
  box-shadow: 0 0 0.5rem rgba(100, 20, 20, 0.5);
  background-color: #3c614d;
  background-image: url(${(props) => props.backgroundImage});
  background-size: 100%;
  background-position: 30% 0%;
  overflow: hidden;

  .card-info {
    background-color: white;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    bottom: 0;
    left: 45%;
    padding: 1rem;
  }
`;

export default Card;
