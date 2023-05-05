import {css} from '@emotion/css';


export const footer = css`

  background-color: black;
  color: white;
  padding: 1rem 0rem;
`;


export const iconsContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem 0rem;

  & > div {
    height: 5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 0rem 2rem;

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

export const divImgEntrega = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  width: 40px;
  height: 40px;

  img {
    width: 24px;
    height: 24px;
  }
`;
export const divImgReturn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  width: 38px;
  height: 38px;


  img {
    width: 40px;
    height: 40px;
  }
`;


export const footerContent = css`
  margin: 0rem 0rem 2rem;

  color: rgba(255, 255, 255, 0.64);

  hr {
    border: 0.5px solid #4d4d4d;

  }
`;

export const boxShapes = css`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;

  }
`;

export const boxSocialNetworks = css`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 0rem;
  justify-content: space-between;
  height: 100%;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;

  h3 {
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

  }
  @media (min-width: 725px) {
    margin-top: 0rem;
  }
`;


export const BoxBankIcon = css`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 5rem;
  gap: 0.5rem;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #737373;
`;

export const contentBankIcons = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 725px) {
    margin-top: 5rem;
  }
`;

export const isDesktop = css`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, auto));

  padding: 0rem 2rem;
  height: 18rem;

  div {
    color: white;
    border: 1px solid;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    font-variant: small-caps;
    color: #ffffff;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
`;

export const lastText = css`

 display: flex;
 flex-direction: column;
 justify-content: space-between;
 height: 100%;
 box-sizing: content-box;

`;
