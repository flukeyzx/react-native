import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useCart } from "../context/cartContext";
import { gameImages } from "./gameImages";

const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart } = useCart();

  const formatCamelCase = (text) => {
    return text
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
      .replace(/^./, (str) => str.toUpperCase());
  };
  return (
    <LinearGradient
      colors={["#0f2027", "#203a43", "#2c5364"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Your Cart</Text>
      </View>

      {cart.length > 0 ? (
        <FlatList
          data={cart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image
                source={{ uri: gameImages[item.category]?.logo.uri }}
                style={styles.cartImage}
              />

              <View style={styles.cartDetails}>
                <Text style={styles.cartTitle}>
                  {formatCamelCase(item.category)}
                </Text>
                <Text style={styles.cartPrice}>
                  ${item.price} on ${item.discount} discount
                </Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromCart(item.id)}
              >
                <Icon name="delete" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Your cart is empty!</Text>
        </View>
      )}

      {/* Checkout Button */}
      {cart.length > 0 && (
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("PaymentScreen")}
        >
          <LinearGradient
            colors={["#43cea2", "#185a9d"]}
            style={styles.checkoutGradient}
          >
            <Text style={styles.checkoutButtonText}>Proceed to Payment</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cartImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  cartDetails: {
    flex: 1,
    marginLeft: 15,
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  cartPrice: {
    marginTop: 5,
    fontSize: 14,
    color: "#43cea2",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    padding: 8,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 18,
    color: "#ccc",
  },
  checkoutButton: {
    margin: 20,
    borderRadius: 25,
    overflow: "hidden",
  },
  checkoutGradient: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CartScreen;
