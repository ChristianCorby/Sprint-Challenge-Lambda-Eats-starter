import React from "react";
import SelectBox from "./components/pizzaSize"
import Toppings from "./components/pizzaToppings"
import ToggleSwitch from "./components/pizzaSub";
import Special from "./components/pizzaSpecial"
const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <h2>Build Your Own Pizza</h2>
      <img src = "https://image.shutterstock.com/image-photo/pizza-ham-salami-mushrooms-ingredients-260nw-661996804.jpg" ></img>
      <h3>Build Your Own Pizza</h3>
      <h4>Choice of Size</h4>
      <p>Required</p>
      <SelectBox
        items ={[
          {value: 'Small', id:1},
          {value: 'Medium', id:2},
          {value: 'Large', id:3},
        ]}
      />
      <h4>Choice of Sauce</h4>
      <p>Required</p>
      <SelectBox
      items ={[
        {value: 'Original Red', id:1},
        {value: 'Garlic Ranch', id:2},
        {value: 'BBQ Sauce', id:3},
        {value: 'Spinach Alfredo', id:4},]}
        />
      <h4>Add Toppings</h4>
      <p>Choose Up to 10</p>
      <Toppings/>
      <h4>Choice of Substitute</h4>
      <p>Gluten Free Crust?</p>
      <ToggleSwitch/>
      <h4>Special Instructions</h4>
      <Special/>
    </>
  );
};
export default App;
