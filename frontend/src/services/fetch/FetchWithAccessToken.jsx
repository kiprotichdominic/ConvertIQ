const FetchWithAccessToken = async (token, endpoint) => {
  const url = `http://127.0.0.1:8000/api/v1/${endpoint}`;
  let headers = {
    Accept: "*/*",
    Authorization:
      `Bearer ${token}`,
  };
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    let data = await response.json();
    return data
  } catch (error) {
    console.log(error);
    return error
  }
};

export default FetchWithAccessToken;
