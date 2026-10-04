import { describe, expect, it } from "vitest";
import { HIMS_MODULES, HIMS_MODULE_ROUTES, HIMS_ROUTES, resolveHimsRoute, routeForModule } from "./hims-modules";

describe("HIMS module routes", () => {
  it("registers a route for every supplied module screen", () => {
    expect(HIMS_ROUTES).toHaveLength(HIMS_MODULES.reduce((total, module) => total + module.pages.length, 0));
    for (const route of HIMS_ROUTES) {
      expect(resolveHimsRoute(route.path)).toEqual(route);
    }
  });

  it("provides a unique route for each module and screen", () => {
    const paths = [...HIMS_MODULE_ROUTES, ...HIMS_ROUTES].map((route) => route.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("resolves module shortcuts to the first screen in each module", () => {
    for (const module of HIMS_MODULES) {
      const shortcut = routeForModule(module);
      expect(resolveHimsRoute(shortcut)?.module.slug).toBe(module.slug);
    }
  });

  it("resolves the root URL to the hospital admin dashboard", () => {
    const route = resolveHimsRoute("/");
    expect(route?.module.slug).toBe("dashboard");
    expect(route?.page?.slug).toBe("admin-dashboard");
  });
});
