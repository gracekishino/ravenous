const apiKey = process.env.REACT_APP_YELP_API_KEY

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + apiKey
    }
};
  
const getBusinesses = async (location, term, sortBy) => {
    return {"businesses": []};
}

export { getBusinesses };