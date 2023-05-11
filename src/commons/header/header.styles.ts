import { css } from '@emotion/css';

export const header = css`
  position: fixed;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  width: 100%;


  background: white;
  z-index: 99999;
  height: 60px;
  padding-left: 1rem;
  & > :last-child {
    justify-self: end;
  }

  @media (min-width: 725px) {
    grid-template-columns: 5% 20% 50% auto;
  }

  @media (min-width: 1024px) {
    grid-template-columns:  20% 50% auto;
  }
`;

export const menuIcon = css`

@media (min-width: 1024px) {
  display: none;
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
  gap: 2rem;
  justify-content: center;

  a {
    text-decoration: none;
    color: #212429;
  }


  @media (min-width: 1024px) {
    gap: 3rem;
  }
`;

export const boxIcons = css`
  display: flex;
  gap: 20px;
  padding: 0rem 1rem;
  height: 18px;
  margin-right: 3rem;

`;
