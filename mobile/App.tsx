import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthenticationContextProvider } from './src/contexts/auth-context';
import { Login } from './src/pages/login';
import { OrderList } from './src/pages/order-list';
import { SingleOrder } from './src/pages/single-order';

export const headers: Record<string, string> = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* @ts-ignore */}
        <AuthenticationContextProvider>
          {/* @ts-ignore */}
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="OrderList" component={OrderList} options={{ headerBackVisible: false }} />
            <Stack.Screen name="SingleOrder" component={SingleOrder} />
          </Stack.Navigator>
        </AuthenticationContextProvider>
      </NavigationContainer>
    </SafeAreaView >
  );
}
