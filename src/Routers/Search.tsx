import { useLocation } from "react-router-dom";

function Search() {
  const local = useLocation();
  const keywordURL = new URLSearchParams(local.search).get("keyword");

  return null;
}

export default Search;
