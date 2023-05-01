import { css } from "@emotion/css";

export const container = css`

  padding: 1rem;

  h2 {
    padding-bottom: 1rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: #212429;
  }

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
`;

export const content = css``;

export const contentImages = css``;

export const image = css`
  display: grid;
  grid-template-areas:
    "img texto bin"
    "img texto ."
    "img texto ."
    " btn btn price ";
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-areas:
      "img . price bin"
      "img . . ."
      "img . btn btn"
      "img . . .  ";
  }
`;

export const img = css`
  grid-area: img;
`;

export const text = css`
  display: grid;
  grid-area: texto;
`;

export const price = css`
  grid-area: price;

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

  @media (min-width: 1024px) {
    justify-self: unset;
  }
`;

export const btnBox = css`
  grid-area: btn;
`;

export const lightButton = css`
  display: flex;
  flex-direction: row;
  place-content: center;
  justify-content: space-around;
  align-items: center;
  width: 176px;
  height: 48px;
  left: 840px;
  top: 873px;

  border: 1px solid #212429;
  border-radius: 48px;
`;

export const boxForm = css`

`;
