import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";

export default function Guide2() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Your guide</h1>
            <p className="font15">
            This website is exclusively for making reservations at your favorite Ruspina shop.
              <br />
              Please note that we do not offer shipping services, all orders are for reservation purposes only.
            </p>
          </HeaderInfo>
          {/* Flex Container for Uniform Boxes */}
          <BoxRow>
            <BlogBox
              title="Step 1"
              text="Go through our website"
              action={() => alert("clicked")}
            />
            <BlogBox
              title="Step 2"
              text="Go to the catalog"
              action={() => alert("clicked")}
            />
            <BlogBox
              title="Step 3"
              text="Choose your favorite products"
              action={() => alert("clicked")}
            />
            <BlogBox
              title="Step 4"
              text="Fill the form with your relevant informations"
              action={() => alert("clicked")}
            />
            <BlogBox
              title="Step 5"
              text="Congrats you have reserved your products!"
              action={() => alert("clicked")}
            />
            <BlogBox
              title="Step 6"
              text="You will receive your products as soon as it becomes possible"
              action={() => alert("clicked")}
            />
          </BoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;

const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

// Flexbox Container to Ensure Uniform Sizing
const BoxRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; /* Space between boxes */
  
  /* Each child box has the same width */
  & > * {
    flex: 1 1 calc(33.33% - 20px); /* 3 boxes per row */
    min-width: 200px; /* Minimum width to handle responsiveness */
  }
`;
