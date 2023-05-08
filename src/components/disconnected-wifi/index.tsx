import { View, Text } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

import styles from "./styles";
import { COLORS } from "../../config";
import { getSize } from "../../hooks";

export type Props = {
  dark?: boolean;
};

const DisconnectedWifi: React.FC<Props> = () => {
  return (
    <View style={[styles.wrapperWifi, styles.wrapperParent]}>
      <View style={[styles.wrapperWifi, styles.wrapperChild]}>
        <View style={[styles.wrapperWifi, styles.iconWifi]}>
          <Feather name="wifi-off" size={getSize(24)} color={COLORS.white} />
        </View>
      </View>
    </View>
  );
};
export default DisconnectedWifi;
