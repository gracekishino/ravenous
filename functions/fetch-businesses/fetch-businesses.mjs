// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

export default async (req, context) => {
  // const apiKey = Netlify.env.get("REACT_APP_YELP_API_KEY");
  return new Response("Hello, world!");
};