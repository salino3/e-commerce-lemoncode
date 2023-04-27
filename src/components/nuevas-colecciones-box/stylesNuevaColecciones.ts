import {css} from '@emotion/css';


export const container = css`
  box-sizing: content-box;
  display: grid;
  grid-template-rows: auto auto;
  height: 100%;
`;

export const h2 = css`
  position: relative;
  left: 7rem;
  bottom: 1rem;
  margin-top: 2rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;
`;


export const content = css`
  display: flex;
  place-items: center;
  flex-direction: column;
  gap: 2px;

  @media (min-width: 725px) {
    justify-content: space-around;
    flex-direction: row;
    overflow-x: auto;
    gap: 10px;

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
  /* width: 176px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px; */

  img {
      height: auto;
      object-fit: cover;
      width: 100vw;
      height: auto;
      
 @media (min-width: 725px){
     width: 100%;

   }
  }
`;

export const buttonNuevasColecciones = css`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 180px;

  &:hover {
    background-color: #212429;
    color: #ffffff;
    border: 0;
  }

 
`;