import {css} from '@emotion/css';


export const container = css`
  padding: 0rem 1rem;

  @media (min-width: 1024px) {
    padding-left: 25%;
  }
`;

export const textDescripcion = css`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #000000;
`;

export const deliveryText = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-justify: left;
  gap: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  img {
    height: 20px;
  }
`;

export const descripcions = css`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  font-variant: small-caps;
  color: #212429;

  div {
    margin: 1rem 0rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const buttonThirdPage = css`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 100%;
  background: #212429;
  color: #ffffff;

`;
