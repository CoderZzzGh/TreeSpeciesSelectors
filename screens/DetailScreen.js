import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailScreen({ route }) {
  const { tree } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tree.name}</Text>
      <Text>Category: {tree.category}</Text>
      <Text>{tree.details}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  }
});