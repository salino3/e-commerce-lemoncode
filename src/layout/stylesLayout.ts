import { css } from "@emotion/css";


export const root = css`
  width: 100vw;
  padding: 2rem;
  
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;