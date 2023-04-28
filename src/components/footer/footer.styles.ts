import {css} from '@emotion/css';


export const footer = css`

background-color: black;
color: white;
padding-bottom: 1rem;
`


export const iconsContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem 0rem;

  & > div {
    height: 5em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-content: flex-start;
    gap: 50%;
    padding: 0.5rem 4rem;

    @media (min-width: 725px) {
      padding: 0.5rem 0rem;
      gap: 10%;
    }
  }

  @media (min-width: 725px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    position: relative;
    left: 2em;
  }
`;

export const boxShapes = css`

 div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0rem 4rem 2rem;
    max-width: 50%;
  }

  /* @media (min-width: 725px) {
    display: none;
  } */
`;