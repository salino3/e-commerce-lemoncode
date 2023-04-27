import {css} from '@emotion/css';



export const container = css`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: solid blue;
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


export const containerLinks = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 2rem;
`; 


export const item = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  /* border: solid green; */

  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
  }

  img {
    @media (min-width: 725px) {
      /* width: 100%; */
    }

    @media (min-width: 1024px) {
      /* width: 150%; */
    }
  }
`;

export const item2 = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  border: solid green;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  /*  */

  span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
  }

  img {
    max-width: 155px;
    max-height: 230px; // <-
    


    @media (min-width: 725px) {
      /* width: 100%; */
    }

    @media (min-width: 1024px) {
      /* width: 150%; */
    }
  }
`;

export const hearthIcon = css`
  position: relative;
  left: 7.5rem;
  bottom: -2em;

  @media (min-width: 1024px) {
    /* left: 13rem; */
    left: 8rem;
  }
`;

export const hearthRed = css`
  fill: red;
`;

