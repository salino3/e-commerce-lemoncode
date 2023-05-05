import {css} from '@emotion/css';

export const root = css`

padding: 0rem 1rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 25% 75%;
    #div {
      position: sticky;
      top: 0;
    }
  }
`;

export const iconProducts = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`;

export const container = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 40vw));
  justify-content: center;

  gap: 20px;

  a {
    text-decoration: none;
  }

  @media (min-width: 725px) {
    gap: 40px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(40px, 360px));
    gap: 10px;
    justify-content: center;
  }

  img {

    width: 100%;
  }
`;

export const card = css`
  justify-self: center ;

`;

export const boxDescription = css`
  display: grid;
  grid-row-gap: 0.5rem;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;

  color: #212429;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  span:nth-child(3) {

    font-weight: 700;
  }
`;

export const popup = css`

display: none;
`;


export const buttonSecondPageLayout = css`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 100%;


  &:hover {
    background-color: #212429;
    color: #ffffff;
    border: 0;
  }
`;
