import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../consts/colors";


const QuantitySelector = ({ quantity = 1 }: { quantity: number }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.value}>{quantity}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  value: {
    marginHorizontal: 15,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default QuantitySelector;
