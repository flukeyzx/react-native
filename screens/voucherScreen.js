import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Header from "./Header";
import { gameImages } from "./gameImages"; // Import the game images object

const VoucherScreen = ({ navigation, route }) => {
  const { category } = route.params || {}; // Category passed from the previous screen

  // Sample vouchers data for dynamic rendering
  const vouchers = [
    { price: 10, discount: "5%", id: 1 },
    { price: 20, discount: "10%", id: 2 },
    { price: 50, discount: "15%", id: 3 },
    { price: 100, discount: "20%", id: 4 },
  ];

  const images = gameImages[category];
  <Header
    onMenuPress={() => navigation.toggleDrawer()}
    onCartPress={() => navigation.navigate("CartScreen")}
  />;

  if (!images) {
    return (
      <View style={styles.comingSoonContainer}>
        <Text style={styles.comingSoonText}>Vouchers Coming Soon!</Text>
        <Image
          source={require("../assets/img/commingsoon.png")} // Add an appropriate image for "coming soon"
          style={styles.comingSoonImage}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        onMenuPress={() => navigation.toggleDrawer()}
        onCartPress={() => navigation.navigate("CartScreen")}
      />
      {/* Game Banner */}
      <View style={styles.banner}>
        <Image source={images.banner} style={styles.bannerImage} />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>{category}</Text>
          <Image source={images.logo} style={styles.bannerLogo} />
        </View>
      </View>

      <FlatList
        data={vouchers}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.voucherCard}
            onPress={() =>
              navigation.navigate("VoucherDetails", {
                voucherId: item.id,
                category: category, // Pass game category (name)
                price: item.price,
                discount: item.discount,
              })
            }
          >
            <Image
              source={images.voucher} // Using the voucher image from the game object
              style={styles.voucherImage}
            />
            <View style={styles.voucherInfo}>
              <Text
                style={styles.voucherTitle}
              >{`$${item.price} Voucher`}</Text>
              <Text style={styles.voucherDiscount}>{item.discount} Off</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Display two items in one row (grid layout)
        contentContainerStyle={styles.voucherList} // Padding around the grid
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  comingSoonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  comingSoonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  comingSoonImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  banner: {
    position: "relative",
    height: 180,
    marginBottom: 20,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bannerOverlay: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  bannerLogo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  voucherList: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  voucherCard: {
    backgroundColor: "#1e1e2f",
    borderRadius: 15,
    marginBottom: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    overflow: "hidden",
    flexDirection: "column",
    width: "48%",
    marginRight: "2%",
    height: 280,
  },
  voucherImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  voucherInfo: {
    paddingHorizontal: 10,
  },
  voucherTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  voucherDiscount: {
    fontSize: 16,
    color: "#42ba96",
  },
});

export default VoucherScreen;
