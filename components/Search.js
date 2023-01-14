import { useRouter } from "next/router";
import { useState } from "react";
import searchData from "../res/searchData.json";

export default function Search() {
  const [searchStr, setSearchStr] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [results, setResults] = useState([]);
  const router = useRouter();

  const search = (value) => {
    setSearchStr(value);
    const nSearch = value.toLowerCase().trim();
    if (nSearch === "") {
      setResults([]);
      return;
    }

    const f1 = searchData.filter((item) =>
      item.name.toLowerCase().includes(nSearch)
    );

    setResults(f1);
  };

  const handleItemClick = (url) => () => {
    setSearchMode(false);
    setSearchStr("");
  };

  return (
    <div className="search">
      <i className="ri-search-2-line"></i>
      <input
        className={`${results.length > 0 && searchMode && "searchInputMode"}`}
        onClick={() => setSearchMode(true)}
        value={searchStr}
        onChange={(e) => search(e.target.value)}
        type="text"
        placeholder="Search"
      ></input>
      {searchMode && (
        <>
          <div
            className={`searchResults ${
              searchStr === "" && results.length === 0 && "hide"
            }`}
          >
            {results.map((item, index) => (
              <div
                key={index}
                className="item"
                onClick={handleItemClick(item.link)}
              >
                <div
                  style={{
                    backgroundImage: "url(" + item.squareImage + ")",
                  }}
                  className="cover"
                ></div>
                <div className="title">{item.name}</div>
              </div>
            ))}
            {searchStr !== "" && results.length === 0 && (
              <>
                <div key={0} className="item noResult">
                  <div className="title" style={{ textAlign: "center" }}>
                    No Results Found
                  </div>
                </div>

                <div
                  onClick={() => router.push("/games")}
                  key={1}
                  className="item viewAllGames"
                >
                  <div className="title" style={{ textAlign: "center" }}>
                    View all Games
                  </div>
                </div>
              </>
            )}
          </div>
          <div
            onClick={() => setSearchMode(false)}
            className="touchBlocker"
          ></div>
        </>
      )}
    </div>
  );
}
