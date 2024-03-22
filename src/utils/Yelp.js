const apiKey = process.env.REACT_APP_YELP_API_KEY

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + apiKey
    }
};
  
const getBusinesses = async (location, term, sortBy) => {
  // testing netlify function
    // await fetch('/.netlify/functions/fetch-businesses?location=London&term=cafe')
    // .then(response => console.log(response));
    
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}&sort_by=${sortBy}&limit=20`;

    const response = await fetch(endpoint, options)
    .then(response => response.json())
    .catch(err => {
        console.error(err);
        return {"businesses": []};
    });
    
    return await response;
}

export { getBusinesses };