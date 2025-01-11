import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Header from "./Header";
import BannerCarousel from "./BannerCarousel";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <StatusBar />
    <Header
      onLogoPress={() => navigation.navigate("HomeScreen")}
      onCartPress={() => navigation.navigate("CartScreen")}
    />
    <LinearGradient colors={["#000000", "#0B8F4E"]} style={styles.gradient}>
      <View style={styles.container2}>
        <Text style={styles.bannerTitle}>Welcome to E-Voucher Store</Text>
        <Text style={styles.bannerSubtitle}>Exclusive deals await you!</Text>
      </View>
    </LinearGradient>
    <BannerCarousel />
    <View style={styles.categories}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[
          {
            name: "Gaming",
            image: require("../assets/img/Zari-GameZone1.jpg"),
          },
          {
            name: "Shopping",
            image: {
              uri: "https://cdn.shopify.com/s/files/1/0588/2177/1472/files/The_Peaky_Blinders_Gang.png?v=1710957212",
            },
          },
          {
            name: "Entertainment",
            image: {
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRN85L_qYmOAMvJLNqO9u3CHDbp04SkjKAkQ&s",
            },
          },
          {
            name: "Food",
            image: {
              uri: "https://www.creatisimo.net/wp-content/uploads/2024/05/food-gift-voucher02.png",
            },
          },
          {
            name: "Travel",
            image: {
              uri: "https://media.istockphoto.com/id/1295812510/vector/travel-agency-concept.jpg?s=612x612&w=0&k=20&c=2TSwJgZrMgfG58fOjMHLT25k8fasMzeisO4hoJQXdg8=",
            },
          },
        ].map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryCard}
            onPress={() =>
              navigation.navigate("VoucherScreen", { category: category.name })
            }
          >
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    <View>
      <Text style={styles.sectionTitle}>Top Flash Sale Vouchers</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          padding: 30,
        }}
      >
        <View style={styles.boxes}>
          <TouchableOpacity
            style={styles.box1}
            onPress={() =>
              navigation.navigate("VoucherScreen", { category: "PubgMobile" })
            }
          >
            <Image
              source={require("../assets/img/pubg.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text>PubgMobile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box2}
            onPress={() =>
              navigation.navigate("VoucherScreen", { category: "Netflix" })
            }
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUddvVoZFWvb5HXkBE2iSQ_qerzYtu1920iQ&s",
              }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text>Netflix</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity
            style={styles.box2}
            onPress={() =>
              navigation.navigate("VoucherScreen", { category: "GooglePlay" })
            }
          >
            <Image
              source={{
                uri: "https://www.lowyat.net/wp-content/uploads/2018/12/google-play-gift-card-my-01.jpg",
              }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text>GooglePlay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box1}
            onPress={() =>
              navigation.navigate("VoucherScreen", { category: "CallofDuty" })
            }
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/a1/6d/80/a16d802308e5b2b4956ec0df548f943a.jpg",
              }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text>CallofDuty</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  bannerImage: {
    width: 300,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  box1: {
    height: 300,
    width: 150,
    backgroundColor: "#333",
    borderRadius: 40,
    margin: 10,
    overflow: "hidden",
  },
  box2: {
    height: 150,
    width: 150,
    backgroundColor: "#333",
    borderRadius: 30,
    margin: 10,
    overflow: "hidden",
  },
  boxes: { flexDirection: "column" },
  image: {
    width: "100%",
    height: "100%",
  },
  container: { flex: 1 },
  gradient: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 20,
  },
  container2: { alignItems: "center", marginTop: 20 },
  bannerTitle: { fontSize: 24, fontWeight: "bold", color: "#fff" },
  bannerSubtitle: { color: "#fff", marginVertical: 10 },
  categories: { marginTop: 20, paddingHorizontal: 10 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    margin: 20,
  },
  categoryCard: { alignItems: "center", marginHorizontal: 10 },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: "Contain",
  },
  categoryText: { marginTop: 5, color: "#333" },
});

export default HomeScreen;
