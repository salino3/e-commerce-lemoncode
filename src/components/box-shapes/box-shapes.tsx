import React from 'react';

interface Props {
    className?: string;
    text1?: string;
    text2?: string;
}

export const BoxShapes: React.FC<Props> = (props) => {
    const { className, text1 = "Compradores", text2 = "Quiénes somos" } = props;

  return (
    <>
      <div className={className}>
        <div>
          {text1}
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr />
      </div>
      <div className={className}>
        <div>
          {text2}
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr />
      </div>
    </>
  );
}
