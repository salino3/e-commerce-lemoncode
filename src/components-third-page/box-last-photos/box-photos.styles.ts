import {css} from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const content = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(40px, 100%));
  justify-content: space-between;
  gap: 10px;

  img {
    width: 100%;
  }

  @media (min-width: 725px) {
    grid-template-columns: repeat(4, minmax(150px, 100%));
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
  border: 1px solid #b6b6b6; //? <--
  padding: 0rem 0.5rem; //? <--
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
`;

export const hearthRed = css`
  fill: red;
`;