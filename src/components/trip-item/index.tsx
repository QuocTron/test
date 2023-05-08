import { View, Text } from "react-native";
import React, { memo, useMemo } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

import styles from "./styles";
import { COLORS } from "../../config";
import { getSize } from "@hooks/useResponsive";

interface IProps {
  item: any;
  index: number;
}
const TripItem: React.FC<IProps> = ({ item, index }) => {
  const parseData = useMemo(() => {
    return {
      name: item?.name || "N/A",
      startDate: item?.startDate || "N/A",
      leadDriver: item?.leadDriver || "N/A",
      teamDriver: item?.teamDriver || "N/A",
      dispatchedBy: item?.dispatchedBy || "N/A",
      issuedOn: item?.issuedOn || "N/A",
    };
  }, []);
  return (
    <View
      style={[styles.container, { marginTop: index === 0 ? getSize(16) : 0 }]}
    >
      <View style={styles.containerTop}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{parseData.name}</Text>
        </View>
      </View>
      <View style={styles.containerBody}>
        <View style={styles.content}>
          <View style={styles.contentItem}>
            <View style={styles.contentItemKey}>
              <AntDesign
                name="calendar"
                size={getSize(20)}
                color={COLORS.text}
              />
              <Text style={styles.contentItemText}>Start date</Text>
            </View>
            <View style={styles.contentItemValue}>
              <Text style={styles.contentItemValueText}>
                {parseData.startDate}
              </Text>
            </View>
          </View>
          <View style={styles.contentItem}>
            <View style={styles.contentItemKey}>
              <AntDesign name="user" size={getSize(20)} color={COLORS.text} />
              <Text style={styles.contentItemText}>Lead driver</Text>
            </View>
            <View style={styles.contentItemValue}>
              <Text style={styles.contentItemValueText}>
                {parseData.leadDriver}
              </Text>
            </View>
          </View>
          <View style={styles.contentItem}>
            <View style={styles.contentItemKey}>
              <AntDesign name="team" size={getSize(20)} color={COLORS.text} />
              <Text style={styles.contentItemText}>Team driver</Text>
            </View>
            <View style={styles.contentItemValue}>
              <Text style={styles.contentItemValueText}>
                {parseData.teamDriver}
              </Text>
            </View>
          </View>
          <View style={styles.contentItem}>
            <View style={styles.contentItemKey}>
              <AntDesign name="user" size={getSize(20)} color={COLORS.text} />
              <Text style={styles.contentItemText}>Dispatch by</Text>
            </View>
            <View style={styles.contentItemValue}>
              <Text style={styles.contentItemValueText}>
                {parseData.dispatchedBy}
              </Text>
            </View>
          </View>
          <View style={styles.contentItem}>
            <View style={styles.contentItemKey}>
              <AntDesign
                name="clockcircleo"
                size={getSize(20)}
                color={COLORS.text}
              />
              <Text style={styles.contentItemText}>Issued on</Text>
            </View>
            <View style={styles.contentItemValue}>
              <Text style={styles.contentItemValueText}>
                {parseData.issuedOn}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(TripItem);
