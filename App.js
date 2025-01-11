import React from "react";
import AppNavigator from "./screens/AppNavigator.js";
import { CartProvider } from "./context/cartContext.jsx";
import Toast from "react-native-toast-message";
import "react-native-get-random-values";

const App = () => {
  return (
    <CartProvider>
      <AppNavigator />
      <Toast />
    </CartProvider>
  );
};

export default App;
