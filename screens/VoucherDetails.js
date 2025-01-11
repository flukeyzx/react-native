import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "./Header";
import { gameImages } from "./gameImages";
import { LinearGradient } from "expo-linear-gradient";
import { useCart } from "../context/cartContext";
import Toast from "react-native-toast-message";

const VoucherDetails = ({ navigation, route }) => {
  const { addToCart } = useCart();
  const { voucherId, category, price, discount } = route.params;

  const handleAddToCart = () => {
    addToCart({ id: voucherId, category, price, discount });
    Toast.show({
      type: "success",
      text1: "Success",
      text2: `Item added to cart successfully`,
      position: "bottom",
      text1Style: { fontSize: 15, fontWeight: "bold" },
      text2Style: { fontSize: 15 },
    });
  };

  const images = gameImages[category] || gameImages.PubgMobile;

  return (
    <ScrollView style={styles.container}>
      <Header
        onMenuPress={() => navigation.toggleDrawer()}
        onCartPress={() => navigation.navigate("CartScreen")}
      />

      <View style={styles.banner}>
        <Image source={images.banner} style={styles.bannerImage} />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>{category}</Text>
          <Image source={images.logo} style={styles.bannerLogo} />
        </View>
      </View>

      {/* Voucher Details Section */}
      <View style={styles.voucherDetailsCard}>
        <Text style={styles.voucherTitle}>{`$${price} Voucher`}</Text>
        <Text style={styles.voucherDiscount}>{`${discount} Off`}</Text>
        <Text style={styles.voucherDescription}>
          This voucher provides a {discount} discount on your next purchase.
          It's ideal for in-game purchases or rewards. Don't miss out on this
          limited-time offer!
        </Text>

        <LinearGradient
          colors={["#000000", "#0B8F4E"]}
          style={styles.buyButton}
        >
          <TouchableOpacity onPress={handleAddToCart}>
            <Text style={styles.buyButtonText}>Add to cart</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  banner: {
    position: "relative",
    height: 220,
    marginBottom: 25,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  bannerOverlay: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  bannerLogo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  voucherDetailsCard: {
    backgroundColor: "#1e1e2f",
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    marginBottom: 30,
  },
  voucherTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  voucherDiscount: {
    fontSize: 24,
    color: "#42ba96",
    marginBottom: 20,
  },
  voucherDescription: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 30,
    lineHeight: 24,
  },
  buyButton: {
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default VoucherDetails;
