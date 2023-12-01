import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Coffee from '../components/Coffee/Coffee';
import Comment from '../components/comments/Comment';
import TabComponent from './Tab';

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
                        alignItems: 'center',
                        backgroundColor:'#674334'
                    },
                    headerTintColor:'white',
                    background:'#674334',
                    headerShadowVisible: false, // applied here
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center',

                    },
                    
                }
                }
            >
                <Stack.Screen name="Tab"  component={TabComponent} options={{ title: 'Coffee App' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;