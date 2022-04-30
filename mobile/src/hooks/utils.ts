import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get('window');
const smallDimmension = Math.min(width, height);

export function px(value: number) {
    return value * smallDimmension / 400;
}
