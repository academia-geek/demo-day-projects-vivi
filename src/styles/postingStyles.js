import styled from "styled-components";

export const DivPosting = styled.div`
  padding: 20px 40px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
`;
