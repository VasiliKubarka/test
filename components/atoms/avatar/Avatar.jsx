// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
// $FlowFixMe
import { ReactComponent as ProfileSvg } from './profile.svg';
import { THEME_COLORS } from 'styles';
import * as R from 'ramda';

type PropSizes = 'sm' | 'md' | 'lg' | 'auto';

type AvatarProps = {|
  imageSrc: ?string,
  className?: string,
  size: PropSizes,
|};

const getSizesFromProps: (value: ?PropSizes) => string = R.cond([
  [R.equals('sm'), R.always('22px')],
  [R.equals('md'), R.always('40px')],
  [R.equals('lg'), R.always('60px')],
]);

const getAvatarSize = ({ size }: AvatarProps) => css`
  height: ${getSizesFromProps(size)};
  width: ${getSizesFromProps(size)};
`;

const AvatarImage: React$ComponentType<{ src: ?string }> = styled.div`
  ${getAvatarSize};
  border-radius: 50%;
  background-image: ${({ src }) => `url("${src}")`};
  background-size: cover;
  background-position: top center;
`;

const AvatarDefault = styled(ProfileSvg)`
  ${getAvatarSize};
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid ${THEME_COLORS.secondaryText};
  fill: ${THEME_COLORS.secondaryText};
`;

const Avatar = ({ imageSrc, className, size }: AvatarProps) => {
  return (
    <Choose>
      <When condition={!!imageSrc}>
        <AvatarImage className={className} src={imageSrc} size={size} />
      </When>
      <Otherwise>
        <AvatarDefault className={className} size={size} />
      </Otherwise>
    </Choose>
  );
};
Avatar.defaultProps = {
  size: 'sm',
};

export { Avatar };
