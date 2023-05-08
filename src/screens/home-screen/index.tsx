import React from "react";
import { View } from "react-native";

import styles from "./styles";

export default function Home({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container} accessibilityElementsHidden={true}></View>
  );
}
