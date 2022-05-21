import React from "react";
import { View, ScrollView } from "react-native";
import { OrderItem } from "../components/order-component";
import { useAppNavigation } from "../hooks/utils";

export function OrderList() {
    const nav = useAppNavigation();
    return <ScrollView>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </View>
    </ScrollView>
}
