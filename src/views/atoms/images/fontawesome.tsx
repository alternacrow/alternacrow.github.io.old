import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faGithub,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

type Type = 'github' | 'repository' | 'twitter' | 'email' | 'home';

type Props = {
  type: Type;
  className?: string;
};

export const FontAwesome: FC<Props> = ({ type, className }) => {
  const icon: IconProp =
    type === 'github'
      ? faGithub
      : type === 'repository'
      ? faGitAlt
      : type === 'twitter'
      ? faTwitter
      : type === 'email'
      ? faEnvelope
      : type === 'home'
      ? faHome
      : faGithub;

  return <FontAwesomeIcon className={className} icon={icon} />;
};
