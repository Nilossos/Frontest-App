import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const Header = ({children}) => {
  return (
    <View style={styles.header}>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.89]}
        colors={["#233DFF", "#7C2AE8"]}
        style={styles.linearGradient}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 75,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default Header;
