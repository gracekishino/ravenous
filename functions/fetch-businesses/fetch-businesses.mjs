export default async (request) => {
    const url = new URL(request.url);
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

    try {
        const response = await fetch(endpoint, options);
        const data = await response.json();
        return Response.json(data);
      } catch (error) {
        console.log(error);
        return Response.json({ error: 'Failed fetching data' }, { status: 500 });
      }
};
