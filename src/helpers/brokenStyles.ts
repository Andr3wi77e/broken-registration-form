import { css } from 'styled-components';
import { randomInt } from '@helpers/mathsFunctions';
import { IsBroken } from '@resources_types/brokenFormTypes';

const getIndent = (value = 1) =>
  [...new Array(4)]
    .fill(0)
    .map(() => `${randomInt(0, 30) * value}px`)
    .join(' ');

export const brokenIndent = ({ isBroken }: any & IsBroken) => {
  const indent = getIndent();
  return (
    isBroken &&
    css`
      margin: ${indent}!important;
    `
  );
};

export const brokenTransformRotate = ({ isBroken }: any & IsBroken) => {
  const deg = randomInt(0, 360);
  return (
    isBroken &&
    css`
      transform: rotate(${deg}deg) !important;
    `
  );
};

export const brokenTransformScale = ({ isBroken }: any & IsBroken) => {
  const scale = Math.random() * 1.5 + 1;
  return (
    isBroken &&
    css`
      transform: scale(${scale}) !important;
    `
  );
};
export const brokenTransformSkew = ({ isBroken }: any & IsBroken) => {
  const skew = randomInt(-20, 30);
  return (
    isBroken &&
    css`
      transform: skew(${skew}deg) !important;
    `
  );
};
