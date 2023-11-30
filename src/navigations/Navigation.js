import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Coffee/Home';
import { colors } from '../utils/constants';

const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Platform.OS === 'ios' ? 'white' : 'transparent'
    },
};

const Navigation = () => {
    return (
        <NavigationContainer
            theme={MyTheme}
        >
            <Stack.Navigator
            
                screenOptions={{

                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: colors.primary,
                        alignItems: 'center',
                        borderColor:colors.primary
                    },
                    headerTintColor: '#fff',
                    headerShadowVisible: false, // applied here
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center',

                    },
                    
                }
                }
            >
                <Stack.Screen name="Coffees"  component={Home} options={{ title: 'Coffee App' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;