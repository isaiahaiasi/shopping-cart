import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 12rem;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 1.25rem;
  box-shadow: 0 0 0.5rem rgba(100, 20, 20, 0.3);
  font-size: 2rem;

  overflow: hidden;

  * {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.75rem;
  }

  a:hover {
    text-decoration: underline;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #3c614d;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    overflow: hidden;
  }

  .card-info {
    box-sizing: border-box;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 45%;
    padding: 1rem;
  }

  @media (max-width: 35rem) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 24rem;

    .background-image {
      top: 0;
      width: 100%;
      background-position: top;
    }
    .card-info {
      left: 0;
      top: 50%;
      width: 100%;
    }
  }
`;

export default Card;
