import {css} from '@emotion/css';


export const footer = css`

background-color: black;
color: white;
`


export const iconsContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;

  & > div {
    /* width: 10em; */
    height: 5em;
    width: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: 30% 50%;
  }

  @media (min-width: 725px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    position: relative;
    left: 2em;
  }
`;