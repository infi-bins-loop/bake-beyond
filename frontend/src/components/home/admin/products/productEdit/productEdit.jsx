import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  FormText,
} from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { loadProductDetails, modifyProductDetails } from "./productEditHelper";

const BlockEnclosure = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 0.0625rem solid #db5275;
  padding: 1.5rem;
  margin: 1.25rem;
  min-width: 80rem;
  background-color: var(--bs-white);
`;

export default function ProductEdit() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSize, setProductSize] = useState([]);
  const [productPrice, setProductPrice] = useState([]);
  const [productDiscount, setProductDiscount] = useState(0);
  const [productSpecial, setProductSpecial] = useState(false);
  const { selectedProduct } = useParams();
  const navigate = useNavigate();

  const prevView = () => navigate(-1);
  const modifyProduct = async () => {
    await modifyProductDetails(
      selectedProduct,
      productId,
      productName,
      productDesc,
      productImageUrl,
      productCategory,
      productSize,
      productPrice,
      productDiscount,
      productSpecial
    );
    setTimeout(() => null, 500);
    prevView();
  };

  useEffect(() => {
    loadProductDetails(selectedProduct)
      .then((data) => {
        console.log(data);
        setProductId(data.id);
        setProductName(data.name);
        setProductDesc(data.description);
        setProductImageUrl(data.image);
        setProductCategory(data.category);
        setProductSize(data.size);
        setProductPrice(data.price);
        setProductDiscount(data.discount);
        setProductSpecial(data.special);
      })
      .catch((err) => console.log(err));
  }, [selectedProduct]);

  return (
    <BlockEnclosure>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="" style={{ padding: "0" }} onClick={prevView}>
          <ArrowLeft size={"2rem"} />
        </Button>
        <h3>Edit Product</h3>
      </div>
      <Form style={{ display: "grid", gap: ".5rem" }}>
        <FormGroup>
          <FormLabel>ID</FormLabel>
          <FormControl
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormControl
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <FormText>Name must be unique</FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Description</FormLabel>
          <FormControl
            type="text"
            as="textarea"
            rows={5}
            style={{ minHeight: "8.5rem" }}
            value={productDesc}
            onChange={(e) => setProductDesc(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Image</FormLabel>
          <FormControl
            type="text"
            value={productImageUrl}
            onChange={(e) => setProductImageUrl(e.target.value)}
          />
          <FormText>URL of the new image</FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Category</FormLabel>
          <FormControl
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Size</FormLabel>
          <FormControl
            type="text"
            defaultValue={productSize}
            onChange={(e) => setProductSize(e.target.value.split(","))}
          />
          <FormText>Seperate Multiple Entries via comma(,)</FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Price</FormLabel>
          <FormControl
            type="text"
            defaultValue={productPrice}
            onChange={(e) => setProductPrice(e.target.value.split(","))}
          />
          <FormText>Seperate Multiple Entries via comma(,)</FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Discount</FormLabel>
          <FormControl
            type="number"
            value={productDiscount}
            onChange={(e) => setProductDiscount(e.target.value)}
          />
        </FormGroup>
        <FormGroup style={{ marginBottom: ".5rem" }}>
          <FormLabel>Special Tag</FormLabel>
          <FormSelect
            value={productSpecial}
            onChange={(e) => setProductSpecial(e.target.value)}
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </FormSelect>
        </FormGroup>
        <ButtonGroup style={{ gap: "2rem" }}>
          <Button style={{ backgroundColor: "white", border: "0.0625rem solid #db5275"}}>Clear</Button>
          <Button onClick={modifyProduct} style={{ backgroundColor: "#db5275", border: "0.0625rem solid #db5275"}}>Save</Button>
        </ButtonGroup>
      </Form>
    </BlockEnclosure>
  );
}
