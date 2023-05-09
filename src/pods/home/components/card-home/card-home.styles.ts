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
    bottom: 5rem;
    /* font-family: fantasy; */
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
    width: 258px;
    height: 24px;
    color: #ffffff;
  }
`;
