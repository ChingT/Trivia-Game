import { useNavigate, useParams } from "react-router-dom";
import {
  loadSingleProducts,
  clearSingleProduct,
} from "../store/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function QuestionDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);

  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      dispatch(loadSingleProducts(data));
    } catch (e) {
      console.log(e);
      dispatch(clearSingleProduct());
      navigate("/products/notfound");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (product === null) return <>Loading....</>;
  if (product === undefined) return <>Page Not Found!</>;

  return (
    <div id="productDetail">
      <h2>Product {product.title}</h2>
      <img src={product.image} />
      <h2>EUR {product.price.toFixed(2)}</h2>

      <div>{product.description}</div>
    </div>
  );
}
