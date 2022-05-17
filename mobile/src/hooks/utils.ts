import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get('window');
const smallDimmension = Math.min(width, height);

export function px(value: number) {
    return value * smallDimmension / 400;
}

export function useAppNavigation() {
    const nav = useNavigation();

    const navigate = (screen: string, params?: object) => {
        // @ts-ignore
        nav.navigate(screen, params);
    }
    return {
        navigate
    };
}

export function useEffectAsync(fn: () => Promise<void | (() => void)>, deps: any[]) {
    useEffect(() => {
        fn()
    }, deps);
}
