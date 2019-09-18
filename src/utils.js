/* eslint-disable import/prefer-default-export */
import { layout } from './theme';

const getPx = width => width * layout.containerWidth - layout.containerPadding;

export { getPx };
