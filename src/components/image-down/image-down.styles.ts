import {css} from '@emotion/css';


export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;

  font-variant: small-caps;
  color: #212429;

  width: 100%;

  & > :first-child {
    margin: 1rem 0rem;
    padding: 0rem 3rem;
  }
`;

export const content = css`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  padding: 0rem 1rem;

  gap: 1rem;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, auto);
    padding: 0rem 3rem;
  }
`;
