export function add(a: number, b: number) {
  return a + b;
}

export function greet(name: string) {
  return `Hello, ${name}!`;
}

export function filterEven(numbers: number[]) {
  return numbers.filter((number) => number % 2 === 0);
}

export function getUserProfile(id: number) {
  return {
    id,
    name: "John Doe",
  };
}

export function validateInput<TInput>(input: TInput) {
  if (typeof input === "string" || typeof input === "number") {
    return true;
  } else if (input === null || input === undefined) {
    return false;
  } else {
    throw new Error("Invalid input type");
  }
}

export type Data = {
  id: number;
  value: string;
  status: string;
};

export function transformData<TData extends Data>(rawData: TData[]) {
  const transformedData = rawData.map(({ id, value }) => ({
    id,
    data: value.toUpperCase(),
  }));

  const groupedData = Object.groupBy(transformedData, (item) => {
    return rawData.find((data) => data.id === item.id)?.status as string;
  });

  return groupedData;
}
