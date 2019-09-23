/* eslint-disable import/prefer-default-export */
import { containerWidth, containerPadding } from './theme';

const getPx = width => width * containerWidth - containerPadding;

export { getPx };
