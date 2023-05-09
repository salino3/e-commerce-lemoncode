import {css} from '@emotion/css';


export const container = css`
  background-image: url("/assets/group93.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 525px;


  @media (min-width: 725px) {
    background-image: url("/assets/grupo192.png");
    height: 800px;
  }
`;

export const content = css`
  position: relative;
  top: 50%;
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: center;
  padding: 0rem  1rem;

  @media (min-width: 1024px) {
    left: 20%;
  }
`;

export const message = css`

  div {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 150%;
    color: #000000;
  }
`;

export const button = css`

 width: 180px;
 border: solid 1px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #212429;


  &:hover {
    background-color: #212429;
    color: #ffffff;
    border: 0;
  }
`;
