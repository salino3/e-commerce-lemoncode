import {css} from '@emotion/css';


export const container = css`
  padding: 1rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

 @media (min-width: 725px) {
 display: grid;
 grid-template-columns: 50% 50%;
 padding: 0rem 3rem;
 }
`;

export const boxText = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 5rem;
`;

export const txtRoute = css`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`;

export const title = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  font-variant: small-caps;
  color: #000000;

  img {
    width: 16px;
    height: 12px;
    color: #000000;
  }
`;

export const description = css`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #999999;
  margin-bottom: 2rem;
`;

export const boxImgs = css`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
export const card1 = css`
  position: relative;
  right: 1.2rem;
  z-index: 4;
  width: 85%;

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const card2 = css`
  position: absolute;
  right: 3%;
  top: 25%;
  z-index: 3;
  width: 82%;

  @media (min-width: 1024px) {
   width: 77%
  }
`;


export const boxForm = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: auto 2rem;
  width: 100%;

  @media (min-width: 725px) {
    gap: 30px;
  }
  @media (min-width: 1024px) {
    gap: 30px;
  }
`;

export const subTitle = css`

  display: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 312px;

  input {
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 48px;
    border: 2px solid #dbe5f1;

    & :focus {
      border: 2px solid #212429;
    }
  }

  @media (min-width: 1024px) {
    max-width: 384px;
  }
`;

export const boxInputs = css`
  display: grid;
  grid-template-areas:
    'input1 input1 input1 input1'
    'input2 input2 input2 input2'
    'input3 input4 input5 input5';

  box-sizing: content-box;
  width: 100%;

  grid-row-gap: 10px;
`;


export const boxInput1 = css`

 grid-area: input1;
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;

  & :last-child {
    position: relative;
    right: 2rem;
    width: 24px;
    height: 24px;
  }
`;


export const input1 = css`
  padding-left: 0.3rem;
  width: 312px;
  height: 48px;

  @media (min-width: 1024px) {
    width: 384px;
  }
`;


export const boxInput2 = css`
  grid-area: input2;
  width: 100%;
  `;

export const input2 = css`
  padding-left: 0.3rem;
  width: 312px;
  height: 48px;

  @media (min-width: 1024px) {
    width: 384px;
  }
`;


export const boxInput3 = css`

  grid-area: input3;
  display: flex;
  align-items: center;
  width: 100%;

  & :last-child {
    position: relative;
    right: 1.5rem;
  }
`;

export const input3 = css`
  width: 72px;
  height: 48px;
  padding: 0.5rem;

  @media (min-width: 1024px) {
    width: 112px;
  }
`;


export const boxInput4 = css`

  grid-area: input4;
  display: flex;
  align-items: center;
  width: 100%;

  & :last-child {
    position: relative;
    right: 1.5rem;
  }
`;

export const input4 = css`
  width: 72px;
  height: 48px;
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 48px;

  @media (min-width: 1024px) {
    width: 112px;
  }
`;


export const boxInput5 = css`

  grid-area: input5;
  display: flex;
  align-items: center;
  width: 100%;

  & :last-child {
    position: relative;
    right: 2rem;
    width: 20px;
    height: 20px;
  }
`;

export const input5 = css`
  width: 140px;
  height: 48px;
  padding: 0.5rem;
  border: 2px solid #dbe5f1;

  @media (min-width: 1024px) {
    width: 130px;
  }
`;

export const text = css`

 margin: 1rem;
 display: flex;
 flex-direction: row;
 width: 100%;
 justify-content: space-between;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  font-variant: small-caps;
  color: #000000;
`;

export const button = css`
  margin-top: 2rem;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border-radius: 48px;
  color: #000000;
  cursor: pointer;
  border: 1px solid #212429;
  border-radius: 48px;

  &:hover {
    color: #ffffff;
    background: black;
  }
`;



