import { render } from 'preact'
import { 
    get_root,
    normalize_path,
    routes_matcher,
    is_dynamic,
    dynamic_routes_parser
 } from "ziko/router/utils"
export async function createFileBasedRouter({
  pages = {},
  target = globalThis?.document?.body,
} = {}) {
  if(!(target instanceof HTMLElement) && target?.element instanceof HTMLElement) target = target?.element;
  if (!(target instanceof HTMLElement)) {
    throw new Error("Invalid mount target: must be HTMLElement or UIElement");
  }
  const extensions = ['js', 'ts', 'jsx', 'tsx']
  let path = decodeURIComponent(globalThis.location.pathname.replace(/\/$/, ''));
  const routes = Object.keys(pages);
  const root = get_root(routes);

  const pairs = {};
  for (const route of routes) {
    const module = await pages[route]();
    const modComponent = await module.default;
    pairs[normalize_path(route, root, extensions)] = modComponent;
  }

  let mask = null;
  let Component = null;

  for (const [routePath, comp] of Object.entries(pairs)) {
    if (routes_matcher(routePath, `/${path}`)) {
      mask = routePath;
      Component = comp;
      break;
    }
  }

  if (!mask) return; 
  const params = is_dynamic(mask) ? dynamic_routes_parser(mask, path) : undefined;

  params 
    ? render(<Component {...params}/>, target) 
    : render(<Component/>, target) 

}
