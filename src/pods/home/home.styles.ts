import {css} from '@emotion/css';

export const root = css`
  hr {
    margin-top: 3rem;
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

export const buttonHomeLayout = css`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 180px;

  &:hover {
    background-color: #212429;
    color: #ffffff;
    border: 0;
  }
`;


