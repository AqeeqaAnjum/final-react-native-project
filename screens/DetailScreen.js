
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailScreen({ route }) {
  // receiving item from Home screen
  const { item } = route.params || {};

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Detail Screen</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Item ID:</Text>
        <Text style={styles.value}>{item?.id || "N/A"}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.value}>{item?.title || "No Data"}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>
          This is a detailed view of the selected item in OSLER AI Telehealth App.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eef3ff",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
  },

  label: {
    fontWeight: "bold",
    color: "#555",
  },

  value: {
    marginTop: 5,
    fontSize: 16,
  },
});
