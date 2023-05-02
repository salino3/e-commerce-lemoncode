import { css } from "@emotion/css";

export const root = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  hr {
    border: 1px solid #b6b6b6;
    margin-top: 1rem;
  }
`;

export const boxDescription = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 3rem;
  width: 100%;

  @media (min-width: 725px) {
    flex-direction: row;
    gap: 5%;
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
