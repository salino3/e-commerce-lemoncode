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


 display: absolute;
 border: solid;
 top: 10rem;


`

export const subTitle = css`

  display: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`;


