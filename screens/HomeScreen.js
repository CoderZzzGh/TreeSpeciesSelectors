import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import { trees } from "../data/trees";

export default function HomeScreen({ navigation }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTrees = trees.filter(
    tree =>
      (category === "All" || tree.category === category) &&
      tree.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search tree..."
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.filters}>
        {["All", "Fruit", "Timber", "Shade"].map(cat => (
          <TouchableOpacity
            key={cat}
            style={styles.button}
            onPress={() => setCategory(cat)}
          >
            <Text>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredTrees}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Tree Details", { tree: item })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  search: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  },
  button: {
    backgroundColor: "#d9f99d",
    padding: 10,
    borderRadius: 8
  },
  card: {
    backgroundColor: "#f0fdf4",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10
  },
  name: {
    fontWeight: "bold",
    fontSize: 18
  }
});