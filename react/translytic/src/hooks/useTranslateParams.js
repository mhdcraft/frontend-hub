import { useSearchParams } from "react-router-dom";

export default function useTranslateParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pair = searchParams.get("langpair") || "en|fr";

  const [src, tgt] = pair.split("|");

  const query = searchParams.get("q") || "";

  const setLangPair = ({ newSrc = src, newTgt = tgt }) => {
    searchParams.set("langpair", `${newSrc}|${newTgt}`);
    setSearchParams(searchParams);
  };

  const setQuery = (newQuery) => {
    searchParams.set("q", newQuery);
    setSearchParams(searchParams);
  };

  return { soure: src, target: tgt, setLangPair, query, setQuery };
}
