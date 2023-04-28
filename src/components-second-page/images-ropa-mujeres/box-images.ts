import { css } from "@emotion/css";

export const boxImages = css`
  display: flex;
  padding: 1rem;
  gap: 5%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* for IE y Edge */
  scrollbar-width: none; /* for Firefox */

  @media (min-width: 1024px) {
    justify-content: center;
  }
  
`;
