
  
const getBusinesses = async (location, term, sortBy) => {
    const endpoint = `/.netlify/functions/fetch-businesses?location=${location}&term=${term}&sort_by=${sortBy}&limit=20`;

    const response = await fetch(endpoint)
    .then(response => response.json())
    .catch(err => {
        console.error(err);
        return {"businesses": []};
    });
    
    return await response;
}

export { getBusinesses }
