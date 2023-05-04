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

export const content = css`

  @media (min-width: 1024px) {
    padding: 0rem 3rem;
  }
`;
