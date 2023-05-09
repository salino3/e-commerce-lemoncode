import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  position: relative;
`;

export const footer = css`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const contentLeft = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 16px;
  font-weight: 400;
  color: #212429;

  & > :last-child {
    font-weight: 700;
    color: #212429;
  }
`;

export const contentRight = css`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  font-size: 16px;
  font-weight: 400;
  color: #212429;

  @media (min-width: 725px) {
    display: flex;
  }
`;

export const iconContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  position: absolute;
  width: 20px;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;

`;

export const icon = css`
  width: 100%;
`;

export const hearthRed = css`
  fill: red;
`;

export const img = css`
  cursor: pointer;
`;
