import { createSPAFileBasedRouter } from "ziko/router";
import { render } from "solid-js/web";

export const renderer = (target, component, props) => {
  render(() => component(props), target);
};

export const createFileBasedRouter = ({ pages, target }) =>
  createSPAFileBasedRouter({
    pages,
    target,
    extensions: ["jsx", "tsx", "js", "ts"],
    renderer,
  });