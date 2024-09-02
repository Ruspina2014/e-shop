import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow">
        <h3 className="font20 extraBold">{title}</h3>
        <Content>
          <p className="font20">{text}</p>
        </Content>
        {author && <p className="font13 extraBold">{author}</p>}
        {tag && (
          <TagWrapper>
            <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
          </TagWrapper>
        )}
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
  height: 200px; /* Fixed height for uniform size */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space between elements */
`;

const WrapperBtn = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.8;
  }
  width: 100%;
`;

const Content = styled.div`
  flex-grow: 1; /* Allows the content to grow and take available space */
  display: flex;
  justify-content: center; /* Centers the text horizontally */
  align-items: center; /* Centers the text vertically */
  padding: 15px 0;
  text-align: center; /* Optional: centers text inside its flex container */
`;

const TagWrapper = styled.div`
  margin-top: auto; /* Pushes the tag to the bottom */
`;
