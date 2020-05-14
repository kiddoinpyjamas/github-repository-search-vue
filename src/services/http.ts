import axios from "axios";

export default axios.create({
  baseURL: "https://github-repository-search-backend.now.sh",
  params: {
    // API params go here
  }
});
