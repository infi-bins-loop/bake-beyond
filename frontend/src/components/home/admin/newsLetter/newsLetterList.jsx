import React from "react";
import styled from "styled-components";

const BlockEnclosure = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 0.0625rem solid #ffdde6;
  padding: 1.5rem;
  margin: 1.25rem;
  min-width: 80rem;
  background-color: #ffdde6;
`;

export default function NewsLetterList() {
  return (
    <>
      <BlockEnclosure>
        <></>
      </BlockEnclosure>
    </>
  );
}
