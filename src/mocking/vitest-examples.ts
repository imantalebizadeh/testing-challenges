// Mocking

// Example 1
const businessHours = [9, 17];

export function purchase() {
  const currentHour = new Date().getHours();
  const [open, close] = businessHours;

  if (currentHour > open && currentHour < close) {
    return { message: "Success" };
  }

  return { message: "Error" };
}

// Example 2
export const messages = {
  items: [
    { body: "Hello", from: "John" },
    { body: "Hello again", from: "Jane" },
    { body: "how are you?", from: "John" },
  ],
  getLatestMessage,
};

function getLatestMessage(index = messages.items.length - 1) {
  return messages.items[index];
}
