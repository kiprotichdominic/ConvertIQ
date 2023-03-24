const PostApi = async (endpoint) => {
  const url = `http://127.0.0.1:8000/api/v1/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json()
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default PostApi;
