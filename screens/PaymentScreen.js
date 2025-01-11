import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useCart } from "../context/cartContext";

const PaymentScreen = ({ navigation, route }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { setCart } = useCart();

  const handlePayment = () => {
    if (cardNumber && expiryDate && cvv && name) {
      Alert.alert("Payment Successful", "Your purchase has been completed!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("HomeScreen"),
        },
      ]);
      setCart([]);
    } else {
      Alert.alert("Payment Failed", "Please fill in all the fields.");
    }
  };

  const handleCancel = () => {
    Alert.alert(
      "Payment Cancelled",
      "You have cancelled the payment process.",
      [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const month = selectedDate.getMonth() + 1; // Months are zero-indexed
      const year = selectedDate.getFullYear().toString().slice(-2); // Get last two digits of year
      setExpiryDate(`${month < 10 ? `0${month}` : month}/${year}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Secure Payment</Text>

      <TextInput
        style={styles.input}
        placeholder="Cardholder Name"
        placeholderTextColor="#808080"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        placeholderTextColor="#808080"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text.replace(/\D/g, ""))} // Allow only digits
        keyboardType="numeric"
        maxLength={16}
      />
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.input, styles.halfInput, styles.dateInput]}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={{ color: expiryDate ? "#fff" : "#808080" }}>
            {expiryDate || "Expiry Date (MM/YY)"}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="CVV"
          placeholderTextColor="#808080"
          value={cvv}
          onChangeText={(text) => setCvv(text.replace(/\D/g, ""))} // Allow only digits
          keyboardType="numeric"
          maxLength={3}
        />
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <View style={styles.cardIcons}>
        <FontAwesome name="cc-visa" size={40} color="#3C8DBC" />
        <FontAwesome name="cc-mastercard" size={40} color="#FF5A5F" />
        <FontAwesome name="cc-amex" size={40} color="#0073E6" />
        <FontAwesome name="cc-discover" size={40} color="#FF9900" />
      </View>

      <TouchableOpacity style={styles.paymentCard}>
        <Icon name="credit-card" size={30} color="#42BA96" />
        <Text style={styles.paymentCardText}>Add Another Card</Text>
      </TouchableOpacity>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCancel}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#42BA96",
    marginBottom: 20,
    textAlign: "center",
  },
  cardIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  input: {
    backgroundColor: "#1F1F1F",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 0.48,
  },
  dateInput: {
    justifyContent: "center",
  },
  paymentCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  paymentCardText: {
    color: "#42BA96",
    fontSize: 16,
    marginLeft: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#42BA96",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flex: 0.45,
  },
  cancelButton: {
    backgroundColor: "#FF4C4C",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PaymentScreen;
