import {css} from '@emotion/css';


export const footer = css`

background-color: black;
color: white;
padding-bottom: 1rem;
`


export const iconsContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem 0rem;

  & > div {
    height: 5em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-content: flex-start;
    gap: 30%;
    padding: 0rem 4rem;

    @media (min-width: 725px) {
      padding: 0.5rem 0rem;
      gap: 10%;
    }
  }

  @media (min-width: 725px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    position: relative;
    left: 2em;
  }
`;

export const footerContent = css`
  margin: 0rem 2rem 2rem;

  hr {
    border: 0.5px solid #4d4d4d;
  }
`;

export const boxShapes = css`


  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 4rem;
    max-width: 50%;
  }
`;

export const boxSocialNetworks = css`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  color: #ffffff;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    @media (min-width: 1024px) {
      justify-content: space-around;
    }
  }
`;


export const BoxBankIcon = css`
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem 5rem;
  gap: 0.5rem;


`;

export const contentBankIcons = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 1024px) {
    justify-content: space-around;
  }
`;