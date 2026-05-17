
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Header({ onOpenSettings }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>OSLER AI</Text>

      <TouchableOpacity onPress={onOpenSettings}>
        <Text>⚙️</Text>
      </TouchableOpacity>
    </View>
  );
}
