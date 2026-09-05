import { createSPAFileBasedRouter } from "ziko/router";
import { renderer as crankRenderer } from "@b9g/crank/dom";

export const renderer = (target, Component, props) => {
  crankRenderer.render(<Component {...props}/>, target);
};

export const createFileBasedRouter = ({ pages, target }) =>
  createSPAFileBasedRouter({
    pages,
    target,
    extensions: ["jsx", "tsx", "js", "ts"],
    renderer,
  });