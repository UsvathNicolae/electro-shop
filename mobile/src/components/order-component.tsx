import moment from "moment";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { px, useAppNavigation } from "../hooks/utils";

export function OrderItem(p: { orderId: number, date: string, price: number }) {
    const nav = useAppNavigation();
    return <TouchableOpacity onPress={() => nav.navigate("SingleOrder", { orderId: p.orderId })} style={{ flexDirection: "column", marginTop: px(15), backgroundColor: "white", padding: px(20), width: px(185), height: px(150) }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>ORDER: {p.orderId}</Text>
        </View>
        <Text style={{ marginTop: px(20), textAlign: "center" }}>Date: {moment(p.date).format("D MMMM, YYYY")}</Text>
        <Text style={{ textAlign: "center", marginTop: px(10) }}>Total Price: {p.price}$</Text>
    </TouchableOpacity>
}
