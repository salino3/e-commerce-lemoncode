import { css } from "@emotion/css";


export const container = css`
  width: 100%;
  box-sizing: content-box;
  display: grid;
  grid-template-rows: auto 1fr;
  left: 91px;
  top: 1200.29px;
`; 

export const h2 = css`
  position: relative;
  left: 12rem;
 font-style: Montserrat;
 font-weight: '700';
 size: 32px;
 color: #212429;

`;

export const content = css`
 display: flex;
 width: 100%;
 place-content: center;
 gap: 20px;
`;

export const item = css`

  width: 176px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const itembg = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../../../public/assets/grupo-sale.png");
  background-repeat: no-repeat;
  height: 180px;
  width: 200px;

  & div {
    position: relative;
    top: 2.5rem;
    right: 0.8rem;
  }

`;










