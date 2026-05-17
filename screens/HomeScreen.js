
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";

export default function HomeScreen() {
  // Dummy data for UI
  const data = [
    { id: "1", title: "Doctor Appointment" },
    { id: "2", title: "Lab Test Booking" },
    { id: "3", title: "AI Health Chat" },
    { id: "4", title: "Medicine Reminder" },
  ];

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png" }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>OSLER AI Home</Text>
      </View>

      {/* CONTENT */}
      <Text style={styles.title}>Welcome to OSLER AI Dashboard</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6ff",
    padding: 15,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },

  cardText: {
    fontSize: 16,
  },
});
