import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useCart } from "../context/cartContext";

const Header = ({ onLogoPress, onCartPress }) => {
  const { cart } = useCart();

  const cartItemCount = cart.length;

  return (
    <View style={styles.headerContainer}>
      <LinearGradient colors={["#000000", "#000000"]} style={styles.gradient} />
      <View style={styles.header}>
        <TouchableOpacity onPress={onLogoPress}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search vouchers"
          placeholderTextColor="#ccc"
          style={styles.searchBar}
        />
        <TouchableOpacity onPress={onCartPress} style={styles.cartButton}>
          <Icon name="cart-outline" size={30} color="#fff" />
          {cartItemCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartItemCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 80,
    position: "relative",
    top: 0,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    zIndex: 1,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    color: "#333",
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  cartButton: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -10,
    backgroundColor: "red",
    borderRadius: 10,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Header;
