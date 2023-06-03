import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "./Redux/ProductSlice";
import "./styles.css";

export default function ProductList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.productSlice.productDetails);
  const [products, setProducts] = useState([]);
  function handleDelete(id) {
    let productsList = selector;
    let updatedProducts = productsList.filter((elem) => elem.id !== id);
    setProducts(updatedProducts);
  }

  useEffect(() => {
    dispatch(productDetails());
  }, []);

  return (
    <div className="App">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {selector.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                height: "6rem",
                width: "4rem",
                border: "1px solid black",
                borderRadius: "1rem",
                padding: "1rem",
                margin: "0.4em"
              }}
            >
              {item.id}
              <div> {item.title}</div>
              <br />
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          );
        })}
      </div>
    </div>
  );
}
