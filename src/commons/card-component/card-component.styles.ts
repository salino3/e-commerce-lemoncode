import { css } from '@emotion/css';

export const root = css`
  display: grid;
  grid-template-rows: 1fr 25%;
  gap: 1rem;
  padding: 8px;
  position: relative;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    grid-template-rows: 1fr auto;
  }
`;

export const footer = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const contentLeft = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 16px;
  font-weight: 400;
  color: #212429;

  & > :last-child {
    font-weight: 700;
    color: #212429;
  }
`;

export const offer = css`
  color: #ef3c3c;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  @media (min-width: 1024px) {
    align-self: flex-end;
  }
`;

export const contentRight = css`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
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
  padding: 4px;
  position: absolute;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;
  top: 12px;
  right: 12px;
`;

export const icon = css`
  width: 100%;
`;

export const hearthFill = css`
  fill: #212429;
`;

export const img = css`
  cursor: pointer;
  width: 100%;
  height: 100%;
  /* min-height: 100%; */
  object-fit: cover;
  flex-grow: 1;
  border-radius: 12px;
`;

export const textThrough = css`
  text-decoration: line-through;
  opacity: 0.6;
`;
