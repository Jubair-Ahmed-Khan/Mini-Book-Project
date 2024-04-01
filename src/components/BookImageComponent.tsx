import React from 'react';

export const BookImageComponent: React.FC<BookImageComponentProps> = ({ imageUrl }) => {
  return <img className="w-full py-4" src={imageUrl} alt="Book Cover" />;
};