// Navigation packages
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';

// Auxiliary imports
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

// App Screens
// ---------------------------------------------------------

//Profile
import Profile  from '../screens/profile';
import BoardProfile from '../screens/boardProfile';
import EditProfile from '../screens/editProfile';
// Messaging
import Messaging from '../screens/messaging';
import MessagingChild from '../screens/messagingChild';
import NewMessage from '../screens/newMessage';
// Goals
import Goals from '../screens/goals';
import GoalsChild from '../screens/goalsChild';
import AddGoal from '../screens/addGoal';
import AddStep from '../screens/addStep';
import AddBoardToGoal from '../screens/addBoardToGoal';
import OthersGoals from '../screens/othersGoals';
import OthersGoalsChild from '../screens/othersGoalsChild';
import EditGoal from '../screens/editGoal';
import EditBoard from '../screens/editGoalBoard';
import EditSteps from '../screens/editGoalSteps';
// Board
import Board from '../screens/board';
import OwnersBoard from '../screens/ownersBoard';
import OthersBoard from '../screens/othersBoard';
import AddBoard from '../screens/addBoard';
import EditOwnersBoard from '../screens/editOwnersBoard';
import EditOthersBoard from '../screens/editOthersBoard';
// Auxiliary
import Login from '../screens/login';
import CreateAccount from '../screens/createAccount';
import About from '../screens/about';
import ContactUs from '../screens/contactUs';
import Settings from '../screens/settings';
import ReferAFriend from '../screens/referAFriend';
import Logout from '../screens/logout';


// Create App Stack for each screen
// ---------------------------------------------------------

// Initializing Stack navigators
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const MessagingStack = createStackNavigator();
const GoalsStack = createStackNavigator();
const BoardStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const ReferAFriendStack = createStackNavigator();
const AboutStack = createStackNavigator();
const ContactUsStack = createStackNavigator();
const LogoutStack = createStackNavigator();

// Root Stack
// Used to route users depending on their signed-in status.
export const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode='none'>
    {userToken ? (
      <RootStack.Screen
        name='App'
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name='Auth'
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);

// Authorization Stack
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode='none'>
    <AuthStack.Screen
      name='Login'
      component={Login}
    />
    <AuthStack.Screen
      name='Create Account'
      component={CreateAccount}
      options={{
        headerLeft: null
      }}
    />
  </AuthStack.Navigator>
);

// Drawer Navigation Stack
export const DrawerScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name='Home' component={TabsScreen} />
    <Drawer.Screen name='Profile' component={ProfileStackScreen} />
    {
    // <Drawer.Screen name='Settings' component={SettingsStackScreen} />
    // <Drawer.Screen name='Refer a Friend' component={ReferAFriendStackScreen} />
    }
    <Drawer.Screen name='About' component={AboutStackScreen} />
    <Drawer.Screen name='Contact Us' component={ContactUsStackScreen} />
    <Drawer.Screen name='Log Out' component={LogoutStackScreen} />
  </Drawer.Navigator>
);

// Tab Navigation Stack
export const TabsScreen = ({ navigation }) => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Messages') {
          iconName = 'ios-chatbubbles';
        } else if (route.name === 'Goals') {
          iconName = 'ios-podium';
        } else if (route.name === 'Board') {
          iconName = 'ios-people';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#E1B80D',
      inactiveTintColor: 'gray',
    }}
  >
    <Tabs.Screen name="Goals" component={GoalsStackScreen} />
    <Tabs.Screen name="Board" component={BoardStackScreen} />
    <Tabs.Screen name="Messages" component={MessagingStackScreen} />
  </Tabs.Navigator>
);

// Profile Stack
export const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name='Profile'
      component={Profile}
      options={{
          headerLeft: () => (
            <Button
              style={{ marginLeft: 15 }}
              icon={
                <Ionicons
                  name={'md-menu'}
                  size={30}
                  color="gray"
                />
              }
              onPress={() => navigation.toggleDrawer()}
              title=''
              type='clear'
            />
          ),
          headerRight: () => (
            <Button
              style={{ marginRight: 15 }}
              onPress={() => navigation.push('Edit Profile')}
              title='Edit'
              type='clear'
            />
          )
        }}
    />
    <ProfileStack.Screen name='Edit Profile' component={EditProfile} />

  </ProfileStack.Navigator>
);

// Messaging Stack
export const MessagingStackScreen = ({ navigation }) => (
  <MessagingStack.Navigator>
    <MessagingStack.Screen
      name='Messages'
      component={Messaging}
      options={{
          headerLeft: () => (
            <Button
              style={{ marginLeft: 15 }}
              icon={
                <Ionicons
                  name={'md-menu'}
                  size={30}
                  color="gray"
                />
              }
              onPress={() => navigation.toggleDrawer()}
              title=''
              type='clear'
            />
          )
        }}
    />
    <MessagingStack.Screen name='Contact' component={MessagingChild} />
    <MessagingStack.Screen name='New Message' component={NewMessage} />
  </MessagingStack.Navigator>
);

// Goals Stack
export const GoalsStackScreen = ({ navigation }) => (
  <GoalsStack.Navigator>
    <GoalsStack.Screen
      name='Goals'
      component={Goals}
      options={{
          headerLeft: () => (
            <Button
              style={{ marginLeft: 15 }}
              icon={
                <Ionicons
                  name={'md-menu'}
                  size={30}
                  color="gray"
                />
              }
              onPress={() => navigation.toggleDrawer()}
              title=''
              type='clear'
            />
          )
        }}
    />
    <GoalsStack.Screen
      name='Goal'
      component={GoalsChild}
      options={{
        headerRight: () => (
          <Button
            style={{ marginRight: 15 }}
            onPress={() => navigation.push('Edit Goal')}
            title='Edit'
            type='clear'
          />
        )
      }}
    />
    <GoalsStack.Screen name="Add Goal" component={AddGoal} />
    <GoalsStack.Screen name="Add Step" component={AddStep} />
    <GoalsStack.Screen name="Add Board Member to Goal" component={AddBoardToGoal} />
    <GoalsStack.Screen name="Add Board Member" component={AddBoard} />
    <GoalsStack.Screen name='Board Member' component={BoardProfile} />
    <GoalsStack.Screen name='Contact' component={MessagingChild} />
    <GoalsStack.Screen name='Edit Goal' component={EditGoal} />
    <GoalsStack.Screen name='Edit Board' component={EditBoard} />
    <GoalsStack.Screen name='Edit Steps' component={EditSteps} />
  </GoalsStack.Navigator>
);

// Board Stack
export const BoardStackScreen = ({ navigation }) => (
  <BoardStack.Navigator>
    <BoardStack.Screen
      name='Board'
      component={Board}
      options={{
          headerLeft: () => (
            <Button
              style={{ marginLeft: 15 }}
              icon={
                <Ionicons
                  name={'md-menu'}
                  size={30}
                  color="gray"
                />
              }
              onPress={() => navigation.toggleDrawer()}
              title=''
              type='clear'
            />
          )
        }}
    />
    <BoardStack.Screen
      name="Board Members"
      component={OwnersBoard}
      options={{
        headerRight: () => (
          <Button
            style={{ marginRight: 15 }}
            onPress={() => navigation.push('Delete Board Member')}
            title='Edit'
            type='clear'
          />
        )
      }}
    />
    <BoardStack.Screen name="People You Advise" component={OthersBoard}/>
    <BoardStack.Screen name="Add Board Member" component={AddBoard} />
    <BoardStack.Screen name='Their Profile' component={BoardProfile} />
    <BoardStack.Screen name="Their Goals" component={OthersGoals} />
    <BoardStack.Screen name="Add Step" component={AddStep} />
    <BoardStack.Screen name='Goal' component={OthersGoalsChild} />
    <BoardStack.Screen name='Contact' component={MessagingChild} />
    <BoardStack.Screen name='Delete Board Member' component={EditOwnersBoard} />
    <BoardStack.Screen name='Leave a Board' component={EditOthersBoard} />
  </BoardStack.Navigator>
);

// About Stack
export const AboutStackScreen = ({ navigation }) => (
  <AboutStack.Navigator>
    <AboutStack.Screen
      name='About'
      component={About}
      options={{
          headerLeft: () => (
            <Button
              style={{ marginLeft: 15 }}
              icon={
                <Ionicons
                  name={'md-menu'}
                  size={30}
                  color="gray"
                />
              }
              onPress={() => navigation.toggleDrawer()}
              title=''
              type='clear'
            />
          )
        }}
    />
  </AboutStack.Navigator>
);

// Contact Us Stack
export const ContactUsStackScreen = ({ navigation }) => (
  <ContactUsStack.Navigator>
    <ContactUsStack.Screen
      name='Contact Us'
      component={ContactUs}
      options={{
          headerLeft: () => (
            <Button
              style={{ marginLeft: 15 }}
              icon={
                <Ionicons
                  name={'md-menu'}
                  size={30}
                  color="gray"
                />
              }
              onPress={() => navigation.toggleDrawer()}
              title=''
              type='clear'
            />
          )
        }}
    />
  </ContactUsStack.Navigator>
);

// Settings Stack
export const SettingsStackScreen = ({ navigation }) => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name='Settings'
      component={Settings}
      options={{
          headerLeft: () => (
            <Button
              style={{ marginLeft: 15 }}
              icon={
                <Ionicons
                  name={'md-menu'}
                  size={30}
                  color="gray"
                />
              }
              onPress={() => navigation.toggleDrawer()}
              title=''
              type='clear'
            />
          )
        }}
      />
  </SettingsStack.Navigator>
);

// Refer a Friend Stack
export const ReferAFriendStackScreen = ({ navigation }) => (
  <ReferAFriendStack.Navigator>
    <ReferAFriendStack.Screen
      name='Refer a Friend'
      component={ReferAFriend}
      options={{
          headerLeft: () => (
            <Button
              style={{ marginLeft: 15 }}
              icon={
                <Ionicons
                  name={'md-menu'}
                  size={30}
                  color="gray"
                />
              }
              onPress={() => navigation.toggleDrawer()}
              title=''
              type='clear'
            />
          )
        }}
    />
  </ReferAFriendStack.Navigator>
);

// Logout Stack
export const LogoutStackScreen = ({ navigation }) => (
  <LogoutStack.Navigator>
    <LogoutStack.Screen
      name='Log Out'
      component={Logout}
      options={{
          headerLeft: () => (
            <Button
              style={{ marginLeft: 15 }}
              icon={
                <Ionicons
                  name={'md-menu'}
                  size={30}
                  color="gray"
                />
              }
              onPress={() => navigation.toggleDrawer()}
              title=''
              type='clear'
            />
          )
        }}
    />
  </LogoutStack.Navigator>
);
