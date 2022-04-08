import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 102%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  flex: 1;
  margin: 25px;
  min-width: 200px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
    border-radius: 15px;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 100%;
  z-index: 2;
  border-radius: 15px;
  box-shadow: 5px 10px 8px #888888;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Text = styled.div`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const Product = ({ item }) => {
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={item.img} />
      <Info>
        <Row><Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        </Row>
        <Text style={{fontSize:16}}>{item.title}</Text>
        <Text style={{fontSize:12}}>{item.desc}</Text>
        <Text style={{fontSize:14}}>{item.price}</Text>
        {/* <Icon>
          <FavoriteBorderOutlined />
        </Icon> */}
      </Info>
    </Container>
  );
};

export default Product;
