import axios from "axios";

// const postsURL = `https://public-api.wordpress.com/rest/v1/sites/nonfictium.wordpress.com/posts?number=2&page=${page}`;

export async function getPosts() {
  // console.log("runs");

  // let res;

  // axios
  //   .get(
  //     `https://public-api.wordpress.com/rest/v1/sites/nonfictium.wordpress.com/posts`
  //   )
  //   .then((response) => {
  //     // handle success
  //     // console.log(response);
  //     res = response;
  //   });
  // // .catch((error) => {
  // //   // handle error
  // //   console.log(error);
  // // });

  // console.log(res);

  // return res;

  try {
    // Make an API call using Axios
    const response = await axios.get(
      "https://public-api.wordpress.com/rest/v1/sites/nonfictium.wordpress.com/posts"
    );

    // Extract the data from the response
    const data = response.data;

    // Pass the data as props to the page component
    return {
      // props: {
      data,
      // },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null, // or handle error case appropriately
      },
    };
  }
}
