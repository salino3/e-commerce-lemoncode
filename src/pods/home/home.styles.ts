import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1225px;
  margin: 60px auto;

  hr {
    border: 1px solid #b6b6b6;
  }
`;

export const boxDescription = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 3rem;
  width: 100%;
  padding: 0rem 1rem;
  box-sizing: border-box;

  @media (min-width: 725px) {
    flex-direction: row;
    gap: 5%;
    padding: unset;
    box-sizing: unset;
  }

  @media (min-width: 1024px) {
    gap: 150px;
  }
`;

export const imgPrimary = css`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (min-width: 725px) {
    border-radius: 0px 50% 0px 0px;
    width: 40%;
  }
`;

export const buttonHomeComponent = css`
  margin: 2rem auto 1rem;
  padding: 0rem 1rem;
  border: solid 1px;
  width: 280px;
  cursor: pointer;

  &:hover {
    background-color: #212429;
    color: #ffffff;
    border: 0;
  }
`;

export const hr = css`
  margin-top: 3rem;
  border: 1px solid #b6b6b6;
`;
