import React from "react";
import { View, Image, Text, TouchableOpacity, ImageSourcePropType } from "react-native";
import { px, useAppNavigation } from "../hooks/utils";

export interface Product {
    image: ImageSourcePropType,
    description: string,
    inStock: boolean,
    price: number
}

export function OrderItem() {
    const nav = useAppNavigation();
    return <TouchableOpacity onPress={() => nav.navigate("SingleOrder")} style={{ flexDirection: "column", marginTop: px(15), backgroundColor: "white", padding: px(20), width: px(185), height: px(230) }}>
        <View style={{ flexDirection: "row" }}>
            <Image source={require("../../assets/phone.jpg")} style={{ width: px(130), height: px(130) }} />
        </View>
        <Text style={{ marginTop: px(10), textAlign: "center" }}>Data comanda</Text>
        <Text style = {{textAlign: "center"}}>Total Price</Text>
    </TouchableOpacity>
}
