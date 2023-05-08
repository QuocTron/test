import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

type Props = {
  stylesProps?: [];
  leftIcon?: any;
  rightIcon?: any;
  title: string;
  onPress?: () => void;
};

const Button: React.FC<Props> = ({
  stylesProps = [],
  leftIcon = null,
  rightIcon = null,
  title = "",
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity style={[styles.button, ...stylesProps]} onPress={onPress}>
      {leftIcon && leftIcon}
      <Text style={styles.buttonText}>{title}</Text>
      {rightIcon && rightIcon}
    </TouchableOpacity>
  );
};

export default React.memo(Button);
