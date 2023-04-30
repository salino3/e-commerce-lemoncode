import {css} from '@emotion/css';

export const container = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 40vw));
  /* justify-content: center; */
  /* gap: 20px; */
  box-sizing: content-box;


  img {
    width: 22vw;

    @media (min-width: 725px) {
      width: auto;
    }
  }
`;

export const title = css`


font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 120%;
color: #212429;
 

`;

export const card = css`
  justify-self: center;
`;


export const boxDescription = css`
  display: grid;
  grid-row-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  color: #212429;
  font-family: Montserrat;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  width: 100%;

  span:nth-child(3) {
    font-weight: 700;
  }
`;


export const hearthIcon = css`
  position: relative;
  left: 1em;
  top: 2rem;

  @media (min-width: 1024px) {
    top: 5rem;
  }
`;

export const hearthRed = css`
  fill: red;
`;



