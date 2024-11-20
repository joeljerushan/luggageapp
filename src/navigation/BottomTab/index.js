import { Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from '../stack/AuthStack/HomeStack';
import HomeSvg from '../../assets/svg/BottomSvg/Home.svg';
import BookingSvg from '../../assets/svg/BottomSvg/Booking.svg';
import DashBoardSvg from '../../assets/svg/BottomSvg/DashBoard.svg';
import EarningSvg from '../../assets/svg/BottomSvg/Earning.svg';
import AccountSvg from '../../assets/svg/BottomSvg/Account.svg';
import { hp, wp } from "../../utils/Scaling";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from './styles';
import BookingStack from '../stack/AuthStack/BookingStack';
import DashBoardStack from '../stack/AuthStack/DashBoardStack';
import EarningStack from '../stack/AuthStack/EarningStack';
import { ColorSheet } from '@/utils/ColorSheet';
import AccountStack from '@/navigation/stack/AuthStack/AccountStack';

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
            height: wp(20) + insets.bottom,
            backgroundColor: ColorSheet.Gray,
        },
        tabBarItemStyle: {
            marginTop: hp(2),
        },
        tabBarShowLabel: false,
      }}
    >
        {/* Home */}
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={() => ({
            tabBarIcon: ({ focused }) => (
                <View
                  style={[
                    styles.IconContainer,
                    // focused && styles.ActiveIconContainer,
                  ]}
                >
                    <HomeSvg/>
                    <Text style={[styles.Label, focused && styles.ActiveLabel]}>Home</Text>
                </View>
            )
          })}
        />
        {/* Booking */}
        <Tab.Screen 
          name="Booking" 
          component={BookingStack} 
          options={() => ({
            tabBarIcon: ({ focused }) => (
                <View
                  style={[
                    styles.IconContainer,
                    // focused && styles.ActiveIconContainer,
                  ]}
                >
                    <BookingSvg/>
                    <Text style={[styles.Label, focused && styles.ActiveLabel]}>Booking</Text>
                </View>
            )
          })}
        />
        {/* DashBoard */}
        <Tab.Screen 
          name="DashBoard" 
          component={DashBoardStack} 
          options={() => ({
            tabBarIcon: ({ focused }) => (
                <View
                  style={[
                    styles.IconContainer,
                    // focused && styles.ActiveIconContainer,
                  ]}
                >
                    <DashBoardSvg/>
                    <Text style={[styles.Label, focused && styles.ActiveLabel]}>DashBoard</Text>
                </View>
            )
          })}
        />
        {/* Earning */}
        <Tab.Screen 
          name="Earning" 
          component={EarningStack} 
          options={() => ({
            tabBarIcon: ({ focused }) => (
                <View
                  style={[
                    styles.IconContainer,
                    // focused && styles.ActiveIconContainer,
                  ]}
                >
                    <EarningSvg/>
                    <Text style={[styles.Label, focused && styles.ActiveLabel]}>Earning</Text>
                </View>
            )
          })}
        />
        {/* Account */}
        <Tab.Screen 
          name="Account" 
          component={AccountStack} 
          options={() => ({
            tabBarIcon: ({ focused }) => (
                <View
                  style={[
                    styles.IconContainer,
                    // focused && styles.ActiveIconContainer,
                  ]}
                >
                    <AccountSvg/>
                    <Text style={[styles.Label, focused && styles.ActiveLabel]}>Account</Text>
                </View>
            )
          })}
        />
        
    </Tab.Navigator>
  )
}

export default BottomTab;