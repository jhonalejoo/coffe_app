import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colors } from '../utils/constants';
import Coffee from '../components/Coffee/Coffee';
import Comment from '../components/comments/Comment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const TabComponent = () =>{
       return (
        <Tab.Navigator
        screenListeners={({ navigation }) => ({
            tabLongPress: (e) => {
              navigation.jumpTo(e.target.split('-')[0]);
            },
          })}
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: colors.primary,
            tabBarHideOnKeyboard:true,
            tabBarStyle:{borderTopWidth:0,backgroundColor: '#f8f7fa',borderTopRightRadius:5,borderTopLeftRadius:5}
        }}
        >
        <Tab.Screen 
         name="Coffees" 
         component={Coffee}
         options={{
            tabBarLabel: 'Cafes',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
          }}
         /> 
        <Tab.Screen 
        name="comments"  
        component={Comment}
        options={{
            tabBarLabel: 'opiniones',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
          }}
        />   
        </Tab.Navigator>
        )
    };
    
export  default TabComponent;
    