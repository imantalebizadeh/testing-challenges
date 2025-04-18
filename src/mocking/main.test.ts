import { expect, it, vi } from "vitest";
import { processWithUtil, serviceUsingExternalValue } from "./main";

/* ==========================
   Mocking
   ========================== */

// Mocking

// Simple

// Example 1: Mocking a simple utility function
it("should call the utility function with correct arguments", () => {
  const mockUtil = vi.fn();
  processWithUtil(5, mockUtil);
  expect(mockUtil).toHaveBeenCalledWith(5);
});

// Example 2: Mocking a function returning a specific value
it("should return the mocked value from the dependency", () => {
  const getExternalValue = vi.fn().mockReturnValue("mocked data");
  const result = serviceUsingExternalValue(getExternalValue);
  expect(result).toBe("mocked data");
});
