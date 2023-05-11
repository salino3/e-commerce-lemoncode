import {css} from  '@emotion/css';

export const container = css`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: end;

  img {
    width: 100%;
    box-sizing: border-box;
  }
`;


export const boxh3 = css`
  position: absolute;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  border-radius: 0px 0px 24px 24px;
  width: 100%;
  max-height: 128px;
  height: 100%;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    font-variant: small-caps;
    color: #ffffff;
  }
`;
