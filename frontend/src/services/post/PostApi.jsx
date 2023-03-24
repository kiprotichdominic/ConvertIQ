const PostApi = async (data, endpoint) => {
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

  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // };
  // try {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   console.error(error);
  //   return error;
  // }

  // const response = await fetch(url, options);
  // const json = await response.json();
  // return json
};

export default PostApi;
