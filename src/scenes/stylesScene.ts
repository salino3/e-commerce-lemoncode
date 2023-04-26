import { css } from "@emotion/css";


export const boxDescription = css`
  display: flex;
  flex-direction: row;
  gap: 150px;
  margin-bottom: 5rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const imgPrimary = css`
max-width: 497px;
width: 100%;

@media (min-width: 700px) {
  border-radius: 0px 50% 0px 0px;
}
`;