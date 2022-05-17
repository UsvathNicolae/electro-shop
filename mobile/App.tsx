import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffectAsync } from './src/hooks/utils';
import { Login } from './src/pages/login';
import { OrderList } from './src/pages/order-list';
import { SingleOrder } from './src/pages/single-order';

export const headers: Record<string, string> = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}


export default function App() {
  const Stack = createNativeStackNavigator();
  const loginInfo = AsyncStorage.getItem("token");
  useEffectAsync(async () => {
    const token = await loginInfo;
    if (token === null) return;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete headers['Authorization'];
    }
  }, [loginInfo])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* @ts-ignore */}
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OrderList" component={OrderList} />
          <Stack.Screen name="SingleOrder" component={SingleOrder} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
