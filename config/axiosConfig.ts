export const config = {
  // baseUrl: "http://127.0.0.1:8000/api",
  baseUrl: "https://shulea-learn-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
    // Add other common headers here
  },
  // Optional: other configurations
  timeout: 10000, // 10 seconds timeout
  retries: 3,
};
