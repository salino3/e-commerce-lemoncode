import {css} from '@emotion/css';


export const container = css`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  height: 100%;

`;

export const h2 = css`

  margin: 2rem 2rem 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;
`;

export const containerLinks = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 2rem;

  a {
    text-decoration: none;
    color: #212429;
  }
`;

export const content = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  margin: auto;
  padding: 0rem 1rem;
  box-sizing: border-box;
  overflow-x: auto;
  justify-content: center;
  margin-top: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* for IE y Edge */
  scrollbar-width: none; /* for Firefox */


  @media (min-width: 725px) {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }
`;

export const item = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {
    width: 100%;
    height: 100%;

  }
`;



