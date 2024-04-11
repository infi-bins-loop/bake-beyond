import axios from "axios";
import { useEffect, useState } from "react";
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 4rem 0rem;
  h1 {
    margin-bottom: 1rem;
    font-family: Grandstander;
    color: var(--bs-secondary);
  }
  h4 {
    margin-bottom: 1.5rem;
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
    transition: 0.5s;
    transform: scale(1.05);
    z-index: 10;
    border: 1px solid white;
  }

  .card img {
    object-fit: cover;
    height: 60%; /* Reduce image height */
    width: 100%;
  }

  .card-title {
    margin-top: 10px;
    align-self: center;
  }

  button {
    width: 60%;
    background-color: pink;
    color: white;
    border-color: white;
    align-self: center;
    margin: 1rem 0rem;
  }
`;

const SpecialProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSpecialProducts().then((productList) => setProducts(productList));
  }, []);

  return (
    <Container>
      <h1>
        <i>MAKE YOUR DAY SPECIAL</i>
      </h1>
      <h4>
        Some of our special food menu is given here, these are what people order
        more if you want you can order from here.
      </h4>
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
    </Container>
  );
};

export default SpecialProducts;
