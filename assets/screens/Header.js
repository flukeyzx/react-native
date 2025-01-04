import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const Header = ({ onLogoPress, onCartPress }) => (
  <View style={styles.headerContainer}>
    <LinearGradient colors={["#000000", "#000000"]} style={styles.gradient} />
    <View style={styles.header}>
      <TouchableOpacity onPress={onLogoPress}>
        <Image source={require("./logo.png")} style={styles.logo} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search vouchers"
        placeholderTextColor="#ccc"
        style={styles.searchBar}
      />
      <TouchableOpacity onPress={onCartPress}>
        <Icon name="cart-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 80, // Adjust height as needed
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
    height: 40, // Adjusted for better visibility
    width: 40,
    resizeMode: "contain", // Ensures the image maintains aspect ratio
  },
});

export default Header;
