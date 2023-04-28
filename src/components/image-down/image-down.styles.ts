import {css} from '@emotion/css';


export const container = css`
 
  padding: 0rem 3rem;

  img {
    padding-bottom: 1rem;
  }
`;

export const content = css`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  gap: 2rem;

  img {
    width: 100%;

  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, auto);
  }
`;