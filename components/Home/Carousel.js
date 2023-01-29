import data from "../../res/itemList.json";

export default function Carousel({ title = "Featured Products" }) {
  const handleClick = (url) => {
    const elem = document.createElement("a");
    elem.href = url;
    elem.target = "blank";
    elem.click();
  };

  return (
    <div
      className={`carousel ${
        title === "Featured Products" ? "extraPaddingFix" : ""
      }`}
    >
      <div className="actions">
        <div className="title">{title}</div>
        <i
          className="ri-arrow-left-s-line"
          onClick={() => {
            document.getElementById("carousel").scrollLeft -= 200;
          }}
        ></i>
        <i
          className="ri-arrow-right-s-line"
          onClick={() => {
            document.getElementById("carousel").scrollLeft += 200;
          }}
        ></i>
      </div>
      <div className="card-list" id="carousel">
        {data.map((item, index) =>
          item.game === "Y" ? (
            <div key={index} className="card">
              <img
                className="card-bg"
                src={item.wideImage}
                alt="gamePhoto"
              ></img>
              <div className="title-cont">
                <img src={item.squareImage} alt="game square image"></img>
                <div className="card-title">{item.name}</div>
              </div>
              {/* <div className="info">{item.shortDesc}</div> */}
              <button
                onClick={() => handleClick(item.link)}
                className="card-btn"
              >
                Play
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
