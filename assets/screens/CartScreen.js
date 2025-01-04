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
import { gameImages } from "./gameImages"; // Ensure this file path is correct

const CartScreen = ({ navigation }) => (
  <LinearGradient
    colors={["#0f2027", "#203a43", "#2c5364"]}
    style={styles.container}
  >
    <StatusBar barStyle="light-content" />

    <View style={styles.headerContainer}>
      <Icon
        name="shopping-cart"
        size={30}
        color="#fff"
        style={styles.headerIcon}
      />
      <Text style={styles.headerTitle}>Your Cart</Text>
    </View>

    <FlatList
      data={[
        { id: 1, title: "PubgMobile", price: "$10" },
        { id: 2, title: "Netflix", price: "$20" },
        { id: 3, title: "CallofDuty", price: "$30" },
        { id: 4, title: "GooglePlay", price: "$15" },
      ]}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.cartItem}>
          <Image
            source={gameImages[item.title]?.logo}
            style={styles.cartImage}
          />
          <View style={styles.cartDetails}>
            <Text style={styles.cartTitle}>{item.title}</Text>
            <Text style={styles.cartPrice}>{item.price}</Text>
          </View>
          <TouchableOpacity style={styles.removeButton}>
            <Icon name="delete" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    />

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
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerIcon: {
    marginRight: 10,
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
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  cartDetails: {
    flex: 1,
    marginLeft: 15,
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  cartPrice: {
    marginTop: 5,
    fontSize: 16,
    color: "#43cea2",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    padding: 8,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
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
