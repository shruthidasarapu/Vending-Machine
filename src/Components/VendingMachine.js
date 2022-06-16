import { Products } from "./Products";
import { useState } from "react";
import {
  DIVItems,
  DIVProducts,
  DIVName,
  DIVPrice,
  DIVSelect,
  Form,
  Input,
} from "./VendingMachine-styles";

export const VendingMachine = () => {
  const [coins, setCoins] = useState(0);
  const [sumcoins, setSumcoins] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const inputCoins = [20, 10, 5, 2, 1];
  let total = sumcoins.reduce((acc, coin) => acc + coin, 0);

  const onSelect = (name, price) => {
    if (total === price) {
      setSelectedItem({ Product: name, RemainingAmount: 0 });
      return;
    } else if (total < price) {
      alert("Insufficient Amount");
      return;
    } else {
      let remainingCoins = [];
      let remainingAmount = total - price;
      for (let i = 0; i < inputCoins.length; i++) {
        if (remainingAmount <= 0) break;
        if (remainingAmount >= inputCoins[i]) {
          remainingAmount = remainingAmount - inputCoins[i];
          remainingCoins.push(inputCoins[i]);
          if (remainingAmount !== 0) continue;
          return setSelectedItem({
            Product: name,
            RemainingAmount: remainingCoins,
          });
        }
      }
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (inputCoins.includes(coins)) {
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
      <Form>
        <Input
          type='text'
          paceholder='Enter coins'
          value={coins}
          onChange={(e) => {
            setCoins(Number(e.target.value));
          }}
        />
        <button onClick={(e) => onSubmit(e)}>submit</button>
      </Form>
      <div>
        <p>Please enter coins</p>
        {inputCoins
          .slice()
          .reverse()
          .map((coin, i) => (
            <span key={i}>
              {coin}
              {i < inputCoins.length - 1 ? ", " : ""}
            </span>
          ))}
      </div>
      <div>Total Amount : {total}</div>
      <div>
        <DIVItems>
          {Products.map((product) => (
            <DIVProducts key={product.id}>
              <img src={product.imageUrl} alt='images' />
              <DIVName>{product.name}</DIVName>
              <DIVPrice> Price: {product.price}</DIVPrice>
              <DIVSelect>
                <button
                  onClick={() => {
                    onSelect(product.name, product.price);
                  }}>
                  select
                </button>
              </DIVSelect>
            </DIVProducts>
          ))}
        </DIVItems>
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
};
