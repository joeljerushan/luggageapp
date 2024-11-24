import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserBottomTab from './BottomTab/UserBottomTab';
import AdminBottomTab from '../admin/adminNavigation/AdminBottomTab';


const Routes = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <NavigationContainer>
        {isAdmin ? <AdminBottomTab/> : <UserBottomTab /> }
    </NavigationContainer>
  )
}

export default Routes;