// Navigation packages
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

// App Stack imports
import { AuthContext, ProfileContext, GoalContext } from './components/context.js';
import Splash from './screens/splash';
import {
  RootStackScreen,
  AuthStackScreen,
  DrawerScreen,
  TabsScreen,
  ProfileStackScreen,
  MessagingStackScreen,
  GoalsStackScreen,
  BoardStackScreen,
  AboutStackScreen,
  ContactUsStackScreen,
  SettingsStackScreen,
  ReferAFriendStackScreen,
  LogoutStackScreen
} from './components/appStack';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [userIndex, setUserIndex] = React.useState(0);
  const [goalIndex, setGoalIndex] = React.useState(0);

  const authContext = React.useMemo(() => {
    return {
      logIn: () => {
        setIsLoading(false);
        setUserToken('testing');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('testing');
      },
      logOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  }, []);

  const profileContext = React.useMemo(() => {
    return {
      changeBoardProfile: (element) => {
        setUserIndex(element);
      },
      getProfile: () => {
        return userIndex;
      }
    }
  });

  const goalContext = React.useMemo(() => {
    return {
      changeGoal: (element) => {
        setGoalIndex(element);
      },
      getGoal: () => {
        return goalIndex;
      }
    }
  });

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <ProfileContext.Provider value={profileContext}>
        <GoalContext.Provider value={goalContext}>
          <NavigationContainer>
            <RootStackScreen userToken={userToken} userIndex={userIndex} />
          </NavigationContainer>
        </GoalContext.Provider>
      </ProfileContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
