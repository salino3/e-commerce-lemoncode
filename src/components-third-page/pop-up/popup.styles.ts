import {css} from '@emotion/css';

export const modal = css`
  animation: fadeIn;
  animation-duration: 2s;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;

  @media (max-width: 1066px) {
    display: none;
  }
`;

export const content = css`
  position: fixed;
  top: 12%;
  left: 25%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  height: 80%;
  width: 55%;

  background-color: whitesmoke;
  padding: 0.2rem;
  box-sizing: border-box;
  border-radius: 10px;

  #img {
    max-width: 250px;
  }
`;


export const boxClose = css`
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: end;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  img {
    max-width: 20px;
  }

  button {
    cursor: pointer;
  }
`;

export const boxStars = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 50px;
  margin-bottom: 1rem;
`;

export const title = css`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;

  font-variant: small-caps;
  width: 70%;

  color: #212429;
`;


export const price = css`

 margin: 1rem 0rem;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  font-variant: small-caps;
  color: #212429;
`;

export const description = css`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;
  max-height: 135px;
  box-sizing: border-box;
`;

export const boxImages = css`
  margin: 1rem 0rem;

  img {
    margin: 0.2rem 0rem;
    max-width: 80px;
  }
`;

export const size = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;


    div {
      box-sizing: border-box;
      width: 64px;
      height: 48px;
      border: 1px solid #212429;
      border-radius: 81px;
    }

  }
`;

export const boxButtons = css`
  display: flex;
  flex-direction: row;
  margin: auto;
  gap: 20px;
  margin-top: 1rem;
`;

export const lightButton = css`
  display: flex;
  flex-direction: row;
  place-content: center;

  justify-content: space-around;
  align-items: center;
  width: 140px;
  height: 48px;

  border: 1px solid #212429;
  border-radius: 48px;

  img {
    max-width: 20px;
  }
`;

export const darkButton = css`
  width: 145px;
  height: 48px;
  background: #212429;
  border-radius: 48px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;

  img {
    max-width: 20px;
  }
`;

