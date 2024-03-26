import React, { useEffect } from "react";
import axios from "axios";

function Axios() {
  try {
    useEffect(() => {
      axios
        .get("http://hn.algolia.com/api/v1/search_by_date?query=react")
        .then((res) => console.log("Here is the data using axios", res.data));
    }, []);
  } catch (error) {
    console.log(error);
  }
  return <></>;
}

export default Axios;
