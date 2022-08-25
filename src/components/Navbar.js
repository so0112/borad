import React from "react";
import styled from "styled-components";
import { SiStackoverflow } from "react-icons/si";

const Navbar = () => {
  return (
    <Container>
      <p>
        <SiStackoverflow />
        stack <strong>overflow</strong>
      </p>
      <ol className="Products">
        <li>
          <a className="Products__tag" href="http://localhost:3000/">
            Products
          </a>
        </li>
      </ol>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  border-top: 3px solid #f48225;
  background-color: #f8f9f9;
  .Products {
    list-style: none;
  }
  .Products__tag {
    text-decoration: none;
    color: #5b5f62;
  }
`;

export default Navbar;
