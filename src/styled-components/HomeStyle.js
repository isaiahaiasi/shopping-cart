import styled from "styled-components";

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  color: white;

  .img-container {
    position: fixed;
    top: 2rem;
    right: 0;
    max-height: calc(100vh - 2rem);
    z-index: -100;
  }

  .content {
    padding-right: 4rem;
    text-shadow: 0 0 10px black;
    text-align: right;
  }

  h1 {
    font-size: 8rem;
    margin: 0;
  }

  p {
    font-size: 2rem;
  }

  @media (max-width: 60rem) {
    .content {
      padding-right: 1rem;
    }
    h1 {
      font-size: 6rem;
    }
  }
`;

export default HomeStyled;
