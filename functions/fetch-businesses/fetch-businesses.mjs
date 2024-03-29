export default async (req) => {
    const url = new URL(req.url);
    const location = url.searchParams.get("location") ?? "";
    const term = url.searchParams.get("term") ?? "";
    const sort_by = url.searchParams.get("sort_by") ?? "rating";
    const limit = url.searchParams.get("limit") ?? "20";
    const apiKey = Netlify.env.get("REACT_APP_YELP_API_KEY");
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + apiKey
        }
    };
  
    const endpoint = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}&sort_by=${sort_by}&limit=${limit}`;

    const response = await fetch(endpoint, options)
    .then(response => response.json())
    .catch(err => {
        console.error(err);
        return { statusCode: 500, body: error.toString() }
    });

    return new Response(JSON.stringify(response));
};
