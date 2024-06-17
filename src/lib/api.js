import axios from "axios";

// const postsURL = `https://public-api.wordpress.com/rest/v1/sites/nonfictium.wordpress.com/posts?number=2&page=${page}`;

export async function getPosts() {
  try {
    // Make an API call using Axios
    const response = await axios.get(
      "https://public-api.wordpress.com/rest/v1/sites/kristofnemeth.wordpress.com/posts"
    );

    console.log(response);

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

// export async function getPage(page) {
//   try {
//     // Make an API call using Axios
//     let url = `https://public-api.wordpress.com/rest/v1/sites/nonfictium.wordpress.com/posts?page=${page}`;

//     const response = await axios.get(url);

//     console.log(response);

//     // Extract the data from the response
//     const data = response.data;

//     // Pass the data as props to the page component
//     return {
//       // props: {
//       data,
//       // },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         data: null, // or handle error case appropriately
//       },
//     };
//   }
// }
