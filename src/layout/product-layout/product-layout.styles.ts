import {css} from '@emotion/css';


export const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  hr {
    border: 1px solid #b6b6b6;
    margin-top: 1rem;
  }
`;
 

export const buttonThirdPageLayout = css`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 80%;

  &:hover {
    background-color: #212429;
    color: #ffffff;
    border: 0;
  }
`;
