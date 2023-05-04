import {css} from '@emotion/css';

export const container = css`

 /* display: flex;
 flex-direction: column;
 justify-content: center; */
padding: 0rem 1rem;

& > :first-child{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    font-variant: small-caps;
    color: #000000;
  }


`;

export const btn = css`

 img {
  width: 24px;
 }
`;

export const boxBtn = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 1rem auto;
  justify-content: center;

  button {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    margin: 1rem 0rem;
    justify-content: unset;
  }
`;


export const description = css`

 display: flex;
 flex-direction: column;
 gap: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;

  & > :nth-child(2) {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
  }
`;


export const mapIcon = css`
  margin: 1rem 0rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;

  span {
    text-decoration-line: underline;
  }

  img {
    width: 18px;
  }
`;

export const boxInput = css`
  display: grid;
  grid-template-areas:
    'ciudad ciudad'
    'calle calle'
    'numero piso';
  grid-row-gap: 1rem;
  grid-column-gap: 8px;
  width: 312px;
  margin: 0rem auto 3rem;

  @media (min-width: 1024px) {
    width: 591px;
    grid-column-gap: 18px;
    margin: 0rem 0rem 3rem;
  }

  input {
    box-sizing: border-box;
    width: 312px;
    height: 48px;
    border: 2px solid #dbe5f1;
    border-radius: 48px;
    outline: none;
    padding-left: 0.3rem;

    @media (min-width: 1024px) {
      width: 591px;
    }
  }

  input:focus {
    box-sizing: border-box;
    border: 1px solid #131313;
  }

  & > :first-child {
    grid-area: ciudad;
  }

  & > :nth-child(2) {
    grid-area: calle;
  }

  & > :nth-child(3) {
    grid-area: numero;
    width: 152px;
    @media (min-width: 1024px) {
      /* width: 279px; */
      width: 100%;
    }
  }

  & > :nth-child(4) {
    grid-area: piso;
    width: 152px;
    @media (min-width: 1024px) {
      /* width: 279px; */
      width: 100%;
    }
  }
`;



