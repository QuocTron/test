import { View, Text } from "react-native";
import React from "react";

import styles from "./styles";
import { Image } from "react-native";
import { IMAGES } from "@screens/my-account/contains";
import AppText from "@components/app-text";

const AccUser = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoUser}>
        <View style={styles.avatar}>
          <Image source={IMAGES.avatar} style={styles.avatarImg} />
        </View>
        <View style={styles.infoDetail}>
          <AppText style={styles.name}>{"Jacob Jones"}</AppText>
          <AppText style={styles.job}>{"Driver"}</AppText>
        </View>
      </View>
    </View>
  );
};

export default AccUser;
