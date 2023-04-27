import { css } from '@emotion/css';

export const header = css`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  width: 100vw;
  margin:  1rem;

  & > :last-child {
    justify-self: end;
  }

  @media (min-width: 725px) {
    grid-template-columns: 5% 15% 25% auto;
  }
`;

export const nav = css`
  margin: auto;

  @media (max-width: 725px) {
    display: none;
}

@media (min-width: 1000px) {
    white-space: nowrap;
}
`;

export const ul = css`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1rem;

  a {
    text-decoration: none;
  }
`;

export const boxIcons = css`
  display: flex;
  gap: 10px;
  padding: 0rem 1rem;
  margin-right: 3rem;
`;