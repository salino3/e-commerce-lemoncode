import {css} from '@emotion/css';

export const container = css`
  /* hr {
    background: #212429;
    border: 1px solid #212429;
    margin: 1rem 0rem;
    @media (max-width: 1024px) {
      display: none;
    }
  } */

  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  gap: 10px;
  margin: auto;
  background: #f8f8f8;
  border-radius: 12px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-variant: small-caps;
  color: #000000;

  & :first-child {
    font-weight: 700;
  }

  span {
    font-weight: 700;
  }

  @media (min-width: 725px) {
    padding: 1rem 5rem;

    div {
      padding: 0rem 5rem;
    }
  }

  @media (min-width: 1024px) {
    & > :last-child {
      display: none;
    }

  }
`;




