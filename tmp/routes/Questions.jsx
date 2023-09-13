import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/slices/products";
import { NavLink, Outlet } from "react-router-dom";

export default function Questions() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    document.title = "Questions - Trivia Game";
  });

  const fetchProducts = async (num = 10) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products?limit=${num}`);
      const data = await res.json();
      dispatch(loadProducts(data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProducts = () => {
    if (!products.length) return <>Loading...</>;
    return products.map((product) => (
      <NavLink to={`/products/${product.id} `} key={product.id}>
        {product.title}
      </NavLink>
    ));
  };

  return (
    <div id="products">
      <aside>
        <h1>Our Questions are...</h1>
        {renderProducts()}
      </aside>
      <Outlet />
    </div>
  );
}
