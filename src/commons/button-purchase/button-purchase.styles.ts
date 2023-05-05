import {css} from '@emotion/css';


export const container = css`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  gap: 10px;
  margin: auto;
  background: #f7f7f7;

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
    padding: 0rem 5rem;

    div {
      padding: 0rem 5rem;
    }
  }
`;

