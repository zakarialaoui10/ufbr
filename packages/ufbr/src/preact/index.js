import { createSPAFileBasedRouter } from "ziko/router";
import { render, createElement } from "preact";

export const createFileBasedRouter = ({ pages, target }) =>
  createSPAFileBasedRouter({
    pages,
    target,
    extensions: ["jsx", "tsx", "js", "ts"],
    renderer: (target, component, props) => {
      render(
        createElement(component, props),
        target
      );
    }
  });