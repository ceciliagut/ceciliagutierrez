import { vi } from "vitest";

export function mockFetch(manifest: Record<string, unknown[]> | null, ok = true) {
  return vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok,
    json: () => Promise.resolve(manifest),
  } as Response);
}

export function mockFetchError() {
  return vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("Network error"));
}

export function setLocale(pathname: string) {
  Object.defineProperty(window, "location", {
    value: { pathname },
    writable: true,
  });
}
