import {css} from '@emotion/css';


export const root = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  
`;

export const buttonSecondPageLayout = css`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 80%;

  &:hover {
    background-color: #212429;
    color: #ffffff;
    border: 0;
  }
`;