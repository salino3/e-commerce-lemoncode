import {css} from '@emotion/css';


export const image = css`

  display: grid;
  grid-template-areas:
    "img texto bin"
    "img texto ."
    "img texto ."
    "btn btn price ";
  gap: 1rem;


  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #212429;

    span {
      text-transform: capitalize;
      font-weight: 400;
    }
  }

  @media (min-width: 1024px) {
    grid-template-areas:
      "img texto . price bin"
      "img texto . . ."
      "img texto . btn btn"
      "img texto . . . ";
  }
  
`;

export const img = css`
  grid-area: img;
`;

export const text = css`
  display: grid;
  grid-area: texto;
  justify-self: left;

`;


export const price = css`
  grid-area: price;
  justify-self: end;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #212429;
`;

export const svgIcon = css`
  grid-area: bin;
  justify-self: end;

  @media (min-width: 725px) {
    margin-right: 1rem;
  }
`;

export const btnBox = css`
 
  grid-area: btn;
  justify-self: end;

`;

export const lightButton = css`
  display: flex;
  flex-direction: row;
  place-content: center;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #212429;
  border-radius: 48px;
  width: 176px;
  height: 48px;


`;
