import { css } from "@emotion/css";

export const boxIsMobile = css`
  display: grid;
  grid-template-columns: 25% 75%;
`;

export const boxIsDesktop = css`
  display: grid;
  grid-template-columns: 25% 75%;
`;

export const aside = css`

  padding: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;

    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: #212429;
  }

  img {
    width: 15px;
  }
`;

export const boxPrimaryImages = css`
  div {
    margin: 0.5rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const txtRoute = css`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`;

export const boxSecondaryImages = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const boxImages = css`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;

`;

export const title = css`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 90%;

  h2 {
    width: 50%;
  }

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;

  color: #212429;
`;

export const price = css`
  margin: 1rem 0rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #212429;
`;

export const colores = css`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  div {
    border-radius: 100%;
    border: solid #dbe5f1;
    box-sizing: border-box;
    width: 47px;
    height: 47px;
    background: #ffffff;
  }
`;

export const size = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  div {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;

    div {
      box-sizing: border-box;
      width: 64px;
      height: 48px;
      border: 1px solid #212429;
      border-radius: 81px;
    }
  }
`;

export const deliveryText = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-justify: left;
  gap: 10px;
  margin: 1rem;
  width: 50%;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  img {
    height: 20px;
  }
`;

export const boxButtons = css`
  display: flex;
  flex-direction: row;
  margin: auto;
  gap: 20px;
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

  img {
    width: 10px;
  }
`;

export const darkButton = css`
  width: 296px;
  height: 48px;
  background: #212429;
  border-radius: 48px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  cursor: pointer;

  img {
    max-width: 19px;
  }
`;
