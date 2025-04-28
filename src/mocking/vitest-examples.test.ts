import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { purchase } from "./vitest-examples";

describe.only("purchase flow", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return success if the current hour is between the business hours", () => {
    vi.setSystemTime(new Date(2025, 3, 1, 10));
    const result = purchase();
    expect(result).toEqual({ message: "Success" });
  });

  it("should return error if the current hour is not between the business hours", () => {
    vi.setSystemTime(new Date(2025, 3, 1, 18));
    const result = purchase();
    expect(result).toEqual({ message: "Error" });
  });
});
