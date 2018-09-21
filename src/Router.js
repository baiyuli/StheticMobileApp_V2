import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import homePage from './components/homePage';
import SurveyDetail from './components/common/SurveyDetail';
import SideMenu from './components/common/SideMenu';
import TestScreen from './components/common/TestScreen';
import TestScreen2 from './components/common/TestScreen2';
import TestScreen3 from './components/common/TestScreen3';
import TestScreen4 from './components/common/TestScreen4';
import TestScreen5 from './components/common/TestScreen5';

import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';


const RouterComponent = () => {
  return (
    <Router>
      <Stack 
        key="root" 
        hideNavBar
        drawer={true}
        transitionConfig={() => ({
              screenInterpolator: (props) => {
                const { scene } = props
                switch (scene.route.routeName) {
                  case 'main':
                    return StackViewStyleInterpolator.forVertical(props)
        }}})}
      >

        {/* Stack for login */}

        <Stack key="auth">
          <Scene key="login" 
                 hideNavBar 
                 component={LoginForm} 
                 title="Login" 
                 initial
          />
        </Stack>

        {/* Stack for home page */}

        <Scene key="drawer" drawer contentComponent={SideMenu} >
        <Stack 
          key="main"
          transitionConfig={() => ({
              screenInterpolator: (props) => {
                const { scene } = props
                switch (scene.route.routeName) {
                  case 'homePage':
                    return StackViewStyleInterpolator.forFade(props)
                  case 'details':
                    return StackViewStyleInterpolator.forVertical(props)
          }}})}
        >
          <Scene 
            hideNavBar
            key="homePage" 
            component={homePage} 
            title="homePage"
            initial
          />
        </Stack>
        </Scene>

        {/* Stack for survey flow */}

        <Stack
          key="details"
          transitionConfig={() => ({
              screenInterpolator: (props) => {
                const { scene } = props
                switch (scene.route.routeName) {
                  case 'SurveyDetail':
                    return StackViewStyleInterpolator.forFade(props)
                  case 'TestScreen':
                    return StackViewStyleInterpolator.forVertical(props)
          }}})}
        >
        <Scene
            key="SurveyDetail"
            hideNavBar
            component={SurveyDetail}
            title="SurveyDetail"
          /> 

          <Scene
            key="TestScreen"
            hideNavBar
            component={TestScreen}
            title="TestScreen"
          />
          <Scene
            key="TestScreen2"
            hideNavBar
            component={TestScreen2}
            title="TestScreen2"
          /> 
          <Scene
            key="TestScreen3"
            hideNavBar
            component={TestScreen3}
            title="TestScreen3"
          />
          <Scene
            key="TestScreen4"
            hideNavBar
            component={TestScreen4}
            title="TestScreen4"
          />
          <Scene
            key="TestScreen5"
            hideNavBar
            component={TestScreen5}
            title="TestScreen5"
          />


        </Stack>

      </Stack>
    </Router>
  );
};

export default RouterComponent;
