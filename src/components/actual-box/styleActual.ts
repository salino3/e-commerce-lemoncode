import { css } from "@emotion/css";


export const container = css`
  /* width: 100%; */
  box-sizing: content-box;
  display: grid;
  grid-template-rows: auto auto;

`; 

export const h2 = css`
  position: relative;
  left: 12rem;
  bottom: 1rem;
  font-style: Montserrat;
  font-weight: "700";
  font-size: 32px;
  color: #212429;
  /*  */


/*  */
  @media (max-width: 700px) {
    left: 0;
    margin: 0px auto 10px;
  }
`;

export const content = css`
 display: flex;
 /* width: 100%; */
 place-content: center;
 gap: 20px;
 
 @media (max-width: 700px){
   /* autoflow-x: auto; */
   flex-direction: column;
  margin: auto;
 }
`;

export const item = css`

  width: 176px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;










