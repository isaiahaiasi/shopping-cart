import styled from "styled-components";

const Nav = styled.nav`
  /* position: sticky; */
  box-sizing: border-box;
  background: black;
  color: white;
  padding: 0.2rem 0;
  font-size: 1.2rem;

  ul {
    display: flex;
    justify-content: space-around;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export default Nav;
