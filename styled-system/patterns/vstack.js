import { mapObject } from '../helpers.js';
import { css } from '../css/index.js';

const vstackConfig = {
transform(props) {
  const { justify, gap = "10px", ...rest } = props;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: justify,
    gap,
    flexDirection: "column",
    ...rest
  };
}}

export const getVstackStyle = (styles = {}) => vstackConfig.transform(styles, { map: mapObject })

export const vstack = (styles) => css(getVstackStyle(styles))