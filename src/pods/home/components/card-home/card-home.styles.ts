import {css} from  '@emotion/css';

export const container = css`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    position: absolute;
    text-align: center;
    bottom: 2rem;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    font-variant: small-caps;
    color: #ffffff;
  }

  img {
    width: 100%;
    box-sizing: border-box;
  }
`;
