import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

async function getSpecialProducts() {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  });
  let products = null;
  try {
    const res = await axiosInstance.get("/api/products/special");
    products = res.data.products;
    console.log("Special Products: ", res);
  } catch (err) {
    console.log(err);
    return null;
  }
  return products;
}

const Wrapper = styled.div`
  min-height: 40.625rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 4rem 2rem;
  background-color: #db5275;
  h1 {
    margin: 1.2rem 0.25rem;
    font-family: Grandstander;
  }
  h4 {
    margin: 1rem 1rem;
  }
`;

const CardWrapper = styled.div`
  .card {
    width: 300px;
    height: 400px;
    margin-right: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .card:hover {
    transform: scale(1.05); /* Increase scale on hover */
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); /* Add shadow effect on hover */
    z-index: 10;
    border: 1px solid pink;
  }
  .card-img-top {
    width: 100%;
    height: 15rem; /* Adjust the height of the image */
    object-fit: cover; /* Maintain aspect ratio */
  }
  .card-title {
    margin: 0.75rem 0rem;
    align-self: center;
  }
  button {
    width: 60%;
    background-color: pink;
    color: white;
    border-color: white;
    align-self: center;
    margin: 1rem 0rem;
    :hover {
      color: white;
    }
  }
`;

const SpecialProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSpecialProducts().then((productList) => setProducts(productList));
  }, []);

  return (
    <>
      <TextWrapper>
        <h1>
          <i>MAKE YOUR DAY SPECIAL</i>
        </h1>
        <h4>
          Our small team have handcrafted it to make sure you can happily eat
          without worries.
        </h4>
      </TextWrapper>
      <Wrapper>
        {products.map((product) => (
          <CardWrapper key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Title>{product.name}</Card.Title>
              <Button onClick={() => navigate(`/products/${product.id}`)}>
                View
              </Button>
            </Card>
          </CardWrapper>
        ))}
      </Wrapper>
    </>
  );
};

export default SpecialProducts;
