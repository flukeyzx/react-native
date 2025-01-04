import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storedEmail, setStoredEmail] = useState("");
  const [storedPassword, setStoredPassword] = useState("");

  useEffect(() => {
    if (route.params) {
      setStoredEmail(route.params.email);
      setStoredPassword(route.params.password);
    }
  }, [route]);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Input Error", "Please enter both email and password.");
      return;
    }
    if (!email.includes("@gmail.com")) {
      Alert.alert("Invalid Email", "Please enter a valid Gmail address.");
      return;
    }
    if (email === storedEmail && password === storedPassword) {
      Alert.alert("Login Success", "Welcome back!");
      navigation.navigate("HomeScreen");
    } else {
      Alert.alert("Login Failed", "Invalid credentials. Please try again.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient colors={["#6A11CB", "#2575FC"]} style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
      </LinearGradient>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={styles.link}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  form: {
    marginTop: -40,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 3,
  },
  button: {
    backgroundColor: "#2575FC",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#2575FC",
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default LoginScreen;
