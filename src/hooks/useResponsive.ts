import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;
const screenSize = Math.sqrt(width * height) / 100;
const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const getSize = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { getSize };
