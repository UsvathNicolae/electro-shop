import React, { useState } from "react";
import { View, Text } from "react-native";
import { px, useEffectAsync } from "../hooks/utils";
import { useRoute } from "@react-navigation/native";
import { useAuthService } from "../contexts/auth-context";
import { OrderType } from "./order-list";
import moment from "moment";

export function SingleOrder() {
  const route = useRoute();
  const params = route.params as { orderId: string };
  const { loginInfo } = useAuthService();
  const [singleOrder, setSingleOrder] = useState<OrderType>();

  useEffectAsync(async () => {
    if (params.orderId) {
      // if it is not working please change localhost to your internal IPv4 address
      await fetch(`http://localhost:8080/order/get/${params.orderId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginInfo?.token}`
        }
      }).then((data) => {
        return data.json();
      }).then((result) => setSingleOrder(result)).catch((error) => {
        console.log("error: ", error)
      })
    }
  }, [params.orderId])

  return <View style={{ flex: 1, backgroundColor: "white", }}>
    <View style={{ flexGrow: 0.1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>ORDER: {params.orderId}</Text>
      </View>
    </View>
    <View style={{ flexGrow: 1, backgroundColor: "#f3f9fe", borderTopEndRadius: px(50), borderTopLeftRadius: px(50) }}>
      <View style={{ flex: 1, margin: px(80), flexDirection: "column" }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold", fontSize: px(18) }}>Order date: {moment(singleOrder?.createdAt).format("D MMMM, YYYY")}</Text>
        </View>
        <Text style={{ fontSize: px(16), marginTop: px(10) }}>Time: {moment(singleOrder?.createdAt).format("hh:mm A")}</Text>
        <View style={{ marginTop: px(25), flexDirection: "row", borderStyle: "solid", justifyContent: "space-between", padding: px(20), borderWidth: 1, borderColor: "lightgray", borderRadius: px(10) }}>
          <Text>Total price</Text>
          <Text style={{ fontWeight: "bold" }}>{singleOrder?.totalPrice}$</Text>
        </View>
      </View>
    </View>
  </View>
}
