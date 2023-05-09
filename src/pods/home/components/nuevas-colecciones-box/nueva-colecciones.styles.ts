import {css} from '@emotion/css';


export const container = css`
  display: flex;
  flex-direction: column;

`;

export const h2 = css`
  margin: 1rem 2rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;
`;


export const content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 2px;

  @media (min-width: 725px) {
    justify-content: space-around;
    flex-direction: row;
    gap: 10px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none; /* for IE y Edge */
    scrollbar-width: none; /* for Firefox */
  }

  @media (min-width: 1024px) {
    gap: 0px;
  }
`;

export const item = css`
  img {
    height: auto;
    object-fit: cover;
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    height: auto;

    @media (min-width: 725px) {
      width: 100%;
    }
  }
`;


