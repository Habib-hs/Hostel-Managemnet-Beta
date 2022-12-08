/* eslint-disable no-unused-vars */
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";



const FeaturedProperties = () => {
  const {data, error, loading, reFetch} = useFetch("http://127.0.0.1:9000/api/hotels/?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item,i) => (
            <div className="fpItem" key={item._id}>
              <img
               // src={item.photos[0]}
               src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                alt=""
                className="fpImg"
              />
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
