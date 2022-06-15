import { Products } from "./Products";
import { useState } from "react";
import {DIVItems, DIVProducts,DIVName,DIVPrice,DIVSelect,Form,Input } from "./VendingMachine-styles";

export const VendingMachine = () => {
  const [coins, setCoins] = useState(0);
  const [sumcoins, setSumcoins] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  const onSelect = (name, price) => {
    const total = sumcoins.reduce((acc, coin) => acc + coin, 0);

    if (total === price) {
      setSelectedItem({ Product: name, RemainingAmount: 0 });
      return;
    } else if (total < price) {
      alert("Insufficient Amount");
      return;
    } else {
      setSelectedItem({ Product: name, RemainingAmount: total - price });
      setSumcoins([]);
      return;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      coins === 1 ||
      coins === 2 ||
      coins === 5 ||
      coins === 10 ||
      coins === 20
    ) {
      setSumcoins((coin) => [...coin, Number(coins)]);
      setCoins(0);
    } else {
      alert("These coins are not accepted");
      return;
    }
  };
  
  return (
    <>
      <h2>Vending Machine</h2>
      
      <DIVItems>
        {Products.map(
          (product) => (
            <DIVProducts key = {product.id}>
              <img src={product.imageUrl} alt = "images" />
              <DIVName>{product.name}</DIVName>
              <DIVPrice> Price: {product.price}</DIVPrice>
              <DIVSelect>
                <button
                  onClick={() => {
                    onSelect(product.name, product.price);
                  }}
                >
                  select
                </button>
              </DIVSelect>
            </DIVProducts>
          )
         
        )}
      </DIVItems>
     
      <Form>
        <Input
          type="text"
          paceholder="Enter coins"
          value={coins}
          onChange={(e) => {
            e.preventDefault();
            setCoins(Number(e.target.value))}}
        />
        <button onClick={(e) => onSubmit(e)}>submit</button>
      </Form>
      <p>Please enter 1,2,5,10,20 coins only</p>
      <div>
        {Object.keys(selectedItem).map((item, i) => {
          return (
            <div key={i}>
              <p>{`${item}: ${selectedItem[item]}`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
