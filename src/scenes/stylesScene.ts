import { css } from "@emotion/css";


export const boxDescription = css`
  display: flex;
  flex-direction: column;

  gap: 15px;
  margin-bottom: 3rem;
  width: 100%;

  @media (min-width: 725px) {
    flex-direction: row;
    gap: 150px;
    
  }
`;

export const imgPrimary = css`


  width: 100%;
  height: auto;
  object-fit: cover;
/* 
  width: 100vw;
  height: auto; */

  @media (min-width: 725px) {
    border-radius: 0px 50% 0px 0px;
  }
`;

