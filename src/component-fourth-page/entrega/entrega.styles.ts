import {css} from '@emotion/css';

export const container = css`

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
  text-decoration-line: underline;
  color: #000000;

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
    gap: 1rem;

  input {
    box-sizing: border-box;
    width: 312px;
    border: 2px solid #dbe5f1;
    border-radius: 48px;
    outline: none;
    padding-left: 0.3rem;
    /* width: 80%; */
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
    width: 50%;
  }

  & > :nth-child(4) {
    grid-area: piso;
    width: 50%;
  }
`;



