import React, { FC } from 'react';

type Type = 'github' | 'twitter' | 'envelope-o';

type Props = {
  type: Type;
  className?: string;
};

export const FontAwesome: FC<Props> = ({ type, className }) => {
  return <i className={`fa fa-${type} ${className}`} />;
};
