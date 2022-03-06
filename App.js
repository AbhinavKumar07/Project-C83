import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigaton from './navigation/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigaton/>
    </NavigationContainer>
  );
}

