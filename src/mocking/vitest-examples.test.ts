import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { messages, purchase } from "./vitest-examples";

// Example 1
describe("purchase flow", () => {
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

// Example 2
describe("reading messages", () => {
  it("should return the latest message with a spy", () => {
    const spy = vi.spyOn(messages, "getLatestMessage");

    expect(spy.getMockName()).toEqual("getLatestMessage");

    expect(messages.getLatestMessage()).toEqual(
      messages.items[messages.items.length - 1]
    );

    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockImplementationOnce(() => ({
      body: "access-restricted",
      from: "system",
    }));
    expect(messages.getLatestMessage()).toEqual({
      body: "access-restricted",
      from: "system",
    });

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("should return the latest message with a mock", () => {
    const mock = vi.fn().mockImplementation(messages.getLatestMessage);

    expect(mock()).toEqual(messages.items[messages.items.length - 1]);
    expect(mock).toHaveBeenCalledTimes(1);

    mock.mockImplementationOnce(() => "access-restricted");
    expect(mock()).toEqual("access-restricted");

    expect(mock).toHaveBeenCalledTimes(2);

    expect(mock()).toEqual(messages.items[messages.items.length - 1]);
    expect(mock).toHaveBeenCalledTimes(3);
  });
});
