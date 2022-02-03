import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PrincipalScreen from '../container/Principal';

const Stack = createStackNavigator();

export default function PrincipalStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerTitleAlign: "center", headerStyle: { backgroundColor: '#AEE368'}}} name="Principal" component={PrincipalScreen} />
      </Stack.Navigator>
    );
}