import { css } from "@emotion/css";


export const container = css`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  
`; 

export const h2 = css`
  
  margin: 2rem 2rem 1rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;

`;

export const content = css`
  display: flex;
  /* place-content: center; */
  margin: 0rem 1rem;
  gap: 20px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* for IE y Edge */
  scrollbar-width: none; /* for Firefox */
`;

export const item = css`

  width: 176px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;










