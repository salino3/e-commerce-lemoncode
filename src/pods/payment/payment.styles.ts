import {css} from '@emotion/css';


export const container = css`
  padding: 1rem;
  margin-bottom: 5rem;

`;

export const boxText = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const txtRoute = css`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #000000;
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
 flex-direction: column;
 justify-content: center;
 align-items: center;

  img {
    width: 85%;
  }
`;
export const card1 = css`
  position: relative;
  right: 1rem;
  z-index: 4;
`;

export const card2 = css`
  position: relative;
  left: 1rem;
  z-index: 3;
  bottom: 9rem;
`;

export const boxForm = css`

 display: flex;
 flex-direction: column;
 gap: 30px;
 margin: 0rem 2rem;
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
  input {
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 48px;
    border: 2px solid #dbe5f1;

    & :focus {
      border: 2px solid #212429;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const boxInputs = css`
  display: grid;
  grid-template-areas:
    'input1 input1 input1 input1'
    'input2 input2 input2 input2'
    'input3 input4 input5 input5';

  box-sizing: content-box;
  max-width: 312px;
  width: 100%;
  grid-row-gap: 10px;
`;


export const boxInput1 = css`

 grid-area: input1;
 display: flex;
 align-items: center;

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
`;


export const boxInput2 = css`
  grid-area: input2;

  `;

export const input2 = css`
  padding-left: 0.3rem;
  width: 312px;
  height: 48px;

`;


export const boxInput3 = css`

  grid-area: input3;

  display: flex;
  align-items: center;

  & :last-child {
    position: relative;
    right: 1.5rem;
  }
`;

export const input3 = css`
  width: 72px;
  height: 48px;
  padding: 0.5rem;
`;


export const boxInput4 = css`

  grid-area: input4;
  display: flex;
  align-items: center;

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
`;


export const boxInput5 = css`

  grid-area: input5;

  display: flex;
  align-items: center;

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
  width: 312px;
  height: 48px;
  background: #000000;
  border-radius: 48px;
  color: #ffffff;
  cursor: pointer;

`;
