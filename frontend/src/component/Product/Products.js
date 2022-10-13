import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];
const marksrating = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
];
const marksprice = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 5000,
    label: null,
  },
  {
    value: 10000,
    label: null,
  },
  {
    value: 15000,
    label: null,
  },
  {
    value: 20000,
    label: null,
  },
  {
    value: 25000,
    label: "25k",
  },
];
const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();
  const [ratings, setRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    // filteredProductsCount
  } = useSelector((state) => state.products);
  const keyword = match.params.keyword;
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  if (products.length > 0) {
    // dispatch(logger(products.length))
    for (let i = 0; i < products.length; i++) {
      if (products[i].stock === 0) {
        products.splice(i, 1);
      }
    }
  }
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);
  // let count = filteredProductsCount
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <div className="filterBox">
            <fieldset
              style={{
                padding: "10px 30px",
              }}
            >
              <Typography component="legend">Price</Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="discrete-slider"
                step={5000}
                marks={marksprice}
                min={0}
                max={25000}
              />
            </fieldset>
            <fieldset>
              <Typography component="legend">Categories</Typography>
              <ul className="category-box">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </fieldset>
            <fieldset
              style={{
                padding: "10px 30px",
              }}
            >
              <Typography component="legend">Ratings</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRating(newRating);
                }}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={marksrating}
                min={0}
                track="inverted"
                max={5}
              />
            </fieldset>
          </div>

          {/* {resultPerPage<=count &&( */}
          <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              previosPageText="Previous"
              firstPageText="1st"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
          {/* )} */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
