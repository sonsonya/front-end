import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border-radius: 15px;
  ${mobile({ margin: "10px 0px" })}
`;

const Input = styled.input`
  border: 1px solid black;;
  padding: 10px;
  border-radius: 15px;
  ${mobile({ width: "50px" })}
`;

const Button = styled.input`
  border: 1px solid black;;
  padding: 10px;
  border-radius: 15px;
  ${mobile({ width: "50px" })}
`;


const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled defaultValue={'Color'}>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <FilterText>Search Products:</FilterText>
            <Input placeholder="Search"></Input>
            {/* <Button>Search</Button> */}
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Highest Price</Option>
            <Option>Lowest Price</Option>
            <Option>A-Z</Option>
            <Option>Z-A</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      {/* <Newsletter /> */}
      <Footer />
    </Container>
  );
};

export default ProductList;
