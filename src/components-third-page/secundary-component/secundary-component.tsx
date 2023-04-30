import React from "react";
import { useMediaQuery } from "react-responsive";
import { ReviewComponent } from "../reviews";
import { BoxImages } from "../box-images-3page";
import * as classes from "./secundary-comonent.styles";

export const SecundaryComponent: React.FC = () => {
 
  const isMobile: boolean = useMediaQuery({ maxWidth: "725px" });

  return (
    <div className={classes.container}>
      {isMobile ? (
        <>
          <div className={classes.textDescripcion}>
            Descripión{" "}
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <img src="/assets/Group198.png" alt="texto" />
          </div>
          <hr />
          <ReviewComponent />
          <BoxImages />
        </>
      ) : (
        <>
          <div>
            <img src="/assets/Group144.png" alt="texto" />
            <img src="/assets/Group145.png" alt="texto" />
            <img src="/assets/Group146.png" alt="texto" />
          </div>
          <hr />
          <ReviewComponent />
          <BoxImages />
        </>
      )}
    </div>
  );
};
