import {css} from '@emotion/css';



export const isDesktop = css`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 25%));

  gap: 20px;
  padding: 2rem 2rem 5rem;
  height: 18rem;

  div {
    color: white;
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

export const boxEntrega = css`
  display: flex;
  flex-direction: row;
  gap: 10px;

  div {
    justify-content: center;
    text-align: center;

  }
`;


export const divImgEntrega = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  width: 56px;
  height: 56px;

  img {
    width: 33px;
    height: 33px;
  }
`;


export const divText = css`
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const boxReturn = css`
  display: flex;
  flex-direction: row;
  gap: 10px;

  div {
    justify-content: center;
    text-align: center;
  }
`;


export const boxPhone = css`
  display: flex;
  flex-direction: row;
  gap: 10px;

  div {
    justify-content: center;
    text-align: center;
  }

  @media (min-width: 725px) and (max-width: 1100px) {
    margin-bottom: 1rem;
  }
`;



export const divImgReturn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  width: 56px;
  height: 56px;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const divImgPhone = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  width: 56px;
  height: 56px;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const boxMail = css`
  display: flex;
  flex-direction: row;
  gap: 10px;

  div {
    justify-content: center;
    text-align: center;
  }
`;

export const lastText = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: content-box;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;

    color: rgba(255, 255, 255, 0.64);
  }
`;


export const contentBankIcons = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 0.5rem;
`;


export const boxSocialNetworks = css`

    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;

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


export const boxImges = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

