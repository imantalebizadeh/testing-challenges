import { expect, it } from "vitest";

import {
  add,
  filterEven,
  getUserProfile,
  greet,
  transformData,
  validateInput,
} from "./main";

// ## Simple Topics (Basic Assertions)

// ### Simple

// Example 1: Testing a simple addition function
it("should return the sum of two numbers", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

// Example 2: Testing a string concatenation
it("should return a greeting string", () => {
  const name = "World";
  expect(greet(name)).toBe("Hello, World!");
});

// ### Intermediate

// Example 3: Testing array filtering
it("should return only even numbers from an array", () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = filterEven(numbers);
  expect(result).toEqual([2, 4, 6]);
});

// Example 4: Testing object property existence and type
it("should return an object with specific properties", () => {
  const user = getUserProfile(1);
  expect(user).toHaveProperty("id");
  expect(user).toHaveProperty("name");
  expect(typeof user.id).toBe("number");
  expect(typeof user.name).toBe("string");
});

// ### Difficult / Complex

// Example 5: Testing a function with multiple conditional paths
it("should handle different input types correctly for validation", () => {
  expect(validateInput(123)).toBe(true);
  expect(validateInput("abc")).toBe(true);
  expect(validateInput(null)).toBe(false);
  expect(validateInput(undefined)).toBe(false);
  expect(() => validateInput({})).toThrow(/Invalid input type/);
});

// Example 6: Testing a complex data transformation function
it("should correctly transform raw data into a structured format", () => {
  const rawData = [
    { id: 1, value: "a", status: "pending" },
    { id: 2, value: "b", status: "completed" },
  ];
  const expectedStructure = {
    pending: [{ id: 1, data: "A" }],
    completed: [{ id: 2, data: "B" }],
  };
  const result = transformData(rawData);
  expect(result).toEqual(expectedStructure); // Deep equality check
});
