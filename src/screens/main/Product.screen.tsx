import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";


import image from "../../assets/imgs/img.png";
import backIcon from "../../assets/imgs/Vector.png";
import locationIcon from "../../assets/imgs/location.png";
import colors from "../../consts/colors";
import texts from "../../consts/texts";
import QuantitySelector from "../../components/QuantitySelector";
import BottomNav from "../../components/BottomNav";

const screenWidth = Dimensions.get("window").width;

const ProductScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray }}>
      <View style={styles.imageWhiteContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity>
            <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.title}>{texts.title}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={image}
            resizeMode="contain"
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        <View style={styles.graySection}>
          <View style={styles.infoContainer}>
            <View style={styles.locationContainer}>
              <View style={styles.locationIcon}>
                <Image source={locationIcon} style={{ width: 16, height: 16 }} />
              </View>
              <Text style={styles.location}>{texts.location}</Text>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoColumn}>
                <Text style={styles.infoText}>{texts.productSizeLabel}</Text>
                <Text style={styles.infoValue}>{texts.productSizeValue}</Text>
                <View style={{ height: 16 }} />
                <Text style={styles.infoText}>{texts.orderLabel}</Text>
                <QuantitySelector quantity={2} />
              </View>

              <View style={styles.infoColumn}>
                <Text style={styles.infoText}>{texts.productPriceLabel}</Text>
                <Text style={styles.infoValue}>{texts.productPriceValue}</Text>
                <View style={{ height: 16 }} />
                <Text style={styles.infoText}>{texts.totalPriceLabel}</Text>
                <Text style={styles.infoValue}>{texts.totalPriceValue}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{texts.buttonLabel}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWhiteContainer: {
    backgroundColor: "#fff",
    paddingVertical: 30,
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    
  },
  backIcon: {
    width: 12,
    height: 12,
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 28,
    fontFamily:'inter',
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: screenWidth * 0.9,
    height: 277,
    maxWidth: 400,
  },
  graySection: {
    backgroundColor: colors.gray,
    paddingHorizontal: 20,
  },
  infoContainer: {
    borderRadius: 20,
    backgroundColor: colors.gray,
    padding: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginBottom: 15,
  },
  locationIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  location: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.black,
    fontFamily:'inter',
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoColumn: {
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    color: colors.textMuted,
    fontWeight: "600",
    fontSize: 14,
    fontFamily:'inter',
  },
  infoValue: {
    fontWeight: "bold",
    color: colors.black,
    fontSize: 24,
    fontFamily:'inter',
  },
  totalPrice: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily:'inter',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    fontFamily:'inter',
  },
});

export default ProductScreen;
