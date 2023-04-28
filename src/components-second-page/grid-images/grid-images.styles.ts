import {css} from '@emotion/css';

export const card = css`

 border: solid;
 /* width: 30%; */
 /* max-width: auto; */
`;

export const boxDescription = css`

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    max-width: 25em;
`


export const item = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {
    @media (min-width: 725px) {
      width: 100%;
    }

    @media (min-width: 1024px) {
      width: 150%;
    }
  }
`;