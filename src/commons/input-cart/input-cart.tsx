import React from 'react';

interface Props {
  pl?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
}

export const InputCart: React.FC<Props> = (props) => {
 const {type = "text", pl, className} = props;

  return (
     <input
      type={type}
      required
      placeholder={pl}
      className={className} />
  )
}
