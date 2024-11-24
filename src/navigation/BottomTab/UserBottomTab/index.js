import { Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeSvg from '@/assets/icons/BottomSvg/Home.svg';
import BookingSvg from '@/assets/icons/BottomSvg/Booking.svg';
import DashBoardSvg from '@/assets/icons/BottomSvg/DashBoard.svg';
import EarningSvg from '@/assets/icons/BottomSvg/Earning.svg';
import AccountSvg from '@/assets/icons/BottomSvg/Account.svg';
import { hp, wp } from "../../../utils/Scaling";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ColorSheet } from '@/utils/ColorSheet';
import HomeStack from '../../stack/UserStack/AppStack/HomeStack';
import BookingStack from '../../stack/UserStack/AppStack/BookingStack';
import DashBoardStack from '../../stack/UserStack/AppStack/DashBoardStack';
import EarningStack from '../../stack/UserStack/AppStack/EarningStack';
import AccountStack from '../../stack/UserStack/AppStack/AccountStack';
import { styles } from './styles';

const Tab = createBottomTabNavigator()

const UserBottomTab = () => {
    const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
            height: wp(16) + insets.bottom,
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
          name="HomeScreenStack" 
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
          name="BookingScreenStack" 
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
          name="DashBoardScreenStack" 
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
          name="EarningScreenStack" 
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
          name="AccountScreenStack" 
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

export default UserBottomTab;