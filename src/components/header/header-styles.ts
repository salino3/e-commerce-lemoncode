import { css } from '@emotion/css';

export const header = css`
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  gap: 1rem;
  margin: 0rem 1rem;

  & > :last-child {
    justify-self: end;
  }

  @media (max-width: 550px) {
    grid-template-columns: auto 1fr 100%;
  }
`;

export const nav = css`
  margin: auto;
  width: 50%;

  @media (max-width: 550px) {
    display: none;
}

@media (min-width: 1000px) {
    white-space: nowrap;
}
`;

export const ul = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a {
    text-decoration: none;
  }
`;

export const boxImages = css`
  display: flex;
  gap: 10px;
`;