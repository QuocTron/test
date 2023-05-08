import React, { memo, useMemo } from "react";
import { Text, TextStyle } from "react-native";

import { SIZE } from "@config/index";
import styles from "./styles";

export enum StyleTextH {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
}

type Props = {
  children: React.ReactNode;
  type?: StyleTextH;
  h1Style?: TextStyle;
  h2Style?: TextStyle;
  h3Style?: TextStyle;
  h4Style?: TextStyle;
  style?: TextStyle | TextStyle[];
};

const AppText: React.FC<Props> = ({
  children,
  type,
  h1Style,
  h2Style,
  h3Style,
  h4Style,
  style,
}) => {
  let styleTextDefault: TextStyle = useMemo(() => {
    switch (type) {
      case StyleTextH.h1:
        return (styleTextDefault = {
          fontSize: SIZE[StyleTextH.h1],
          ...h1Style,
        });
      case StyleTextH.h2:
        return (styleTextDefault = {
          fontSize: SIZE[StyleTextH.h2],
          ...h2Style,
        });
      case StyleTextH.h3:
        return (styleTextDefault = {
          fontSize: SIZE[StyleTextH.h3],
          ...h3Style,
        });
      case StyleTextH.h4:
        return (styleTextDefault = {
          fontSize: SIZE[StyleTextH.h4],
          ...h4Style,
        });
      default:
        return {};
    }
  }, [type]);

  let styleText: TextStyle = {
    ...styleTextDefault,
    ...styles.text,
  };
  if (style && Array.isArray(style)) {
    let styleAssign = {};
    [...style].forEach((s) => {
      Object.assign(styleAssign, s);
    });
    styleText = {
      ...styleText,
      ...styleAssign,
    };
  } else {
    styleText = {
      ...styleText,
      ...style,
    };
  }
  console.log(styleText);
  return <Text style={{ ...styleText }}>{children}</Text>;
};

export default memo(AppText);
