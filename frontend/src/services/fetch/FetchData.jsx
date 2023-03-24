const FetchData = async (endpoint) => {
  const url = `http://127.0.0.1:8000/api/v1/${endpoint}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
    return error
  }
};

export default FetchData;
