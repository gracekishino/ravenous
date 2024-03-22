// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

export default async (req, context) => {
  return new Response("Hello, world!");
};