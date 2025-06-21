import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


import productIcon from "../assets/imgs/solar_graph-new-up-broken.png";
import salesIcon from "../assets/imgs/material-symbols-light_order-approve-outline-rounded.png";
import scanIcon from "../assets/imgs/scan.png";
import invoicesIcon from "../assets/imgs/solar_delivery-outline.png";
import texts from "../consts/texts";
import colors from "../consts/colors";


const liste=[
    { icon: productIcon, label: texts.bottomNav.products },
    { icon: salesIcon, label: texts.bottomNav.sales },
    {
      icon: scanIcon,
      label: texts.bottomNav.scan,
      scan: true,
    },
    { icon: invoicesIcon, label: texts.bottomNav.delivery, active: true },
    { icon: productIcon, label: texts.bottomNav.invoices },
  ]

const BottomNav = () => {  
  return (
    <View style={styles.container}>
      {liste.map((item, index) => (
        <View style={styles.item} key={index}>
          {item.scan ? (
            <View style={styles.scanCircle}>
              <Image source={item.icon} style={styles.scanIcon} />
            </View>
          ) : (
            <Image source={item.icon} style={styles.icon} />
          )}
          <Text style={item.active ? styles.activeText : styles.label}>
            {item.label}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 10,
    shadowColor: "#B8BFCB",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4.8,
    elevation: 8,
    paddingBottom: 10,
  },
  item: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 4,
  },
  label: {
    color: "#555",
    fontFamily:'inter',
  },
  activeText: {
    color: "#FF980B",
    fontWeight: "bold",
    fontFamily:'inter',
  },
  scanCircle: {
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    marginBottom: 5,
  },
  scanIcon: {
    width: 24,
    height: 24,
  },
});

export default BottomNav;
