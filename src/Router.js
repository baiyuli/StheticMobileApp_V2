import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import homePage from './components/homePage';
import SurveyDetail from './components/common/SurveyDetail';
import SideMenu from './components/common/SideMenu';
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

        <Stack key="auth">
          <Scene key="login" 
                 hideNavBar 
                 component={LoginForm} 
                 title="Login" 
                 initial
          />
        </Stack>
        <Scene key="drawer" drawer contentComponent={SideMenu} >
        <Stack 
          key="main"
          transitionConfig={() => ({
              screenInterpolator: (props) => {
                const { scene } = props
                switch (scene.route.routeName) {
                  case 'homePage':
                    return StackViewStyleInterpolator.forFade(props)
                  case 'SurveyDetail':
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

          <Scene
            key="SurveyDetail"
            hideNavBar
            component={SurveyDetail}
            title="SurveyDetail"
          />  
        </Stack>
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
