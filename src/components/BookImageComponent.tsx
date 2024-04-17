import React from "react";

export const BookImageComponent: React.FC<BookImageComponentProps> = ({ imageUrl }) => {
  return <img className="w-full h-60 p-4" src={imageUrl} alt="Book Cover" />;
};