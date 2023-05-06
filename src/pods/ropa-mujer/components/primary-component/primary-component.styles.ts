import { css } from '@emotion/css';

export const boxIcons = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0rem 1rem;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const boxArrow = css`
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 14px;
  }
`;

export const settingsIcon = css`
  display: flex;
  align-items: center;

  img {
    width: 16px;
    height: 18px;
  }
`;

export const boxIsDesktop = css`
  display: grid;
  grid-template-columns: 25% 75%;

  @media (max-width: 1024px) {
    display: unset;
  }
`;

export const aside = css`
  position: absolute;
  display: none;
  top: 3rem;
  left: 0;
  z-index: 10;
  width: 23%;

  padding: 2.15rem 1rem;

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

  @media (min-width: 1024px) {
    display: unset;
  }
`;

export const texto = css`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
  margin-left: 1rem;
`;
