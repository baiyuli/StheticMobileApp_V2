import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView, Animated, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, MyButton, Spinner } from './common';
import * as Animatable from 'react-native-animatable';
import { SkypeIndicator } from 'react-native-indicators';
import { TextField } from 'react-native-material-textfield';



class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.keyboardHeight = new Animated.Value(0);
    this.imageHeight = new Animated.Value(250);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: 150,
      }),
    ]).start();
  }

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: 250,
      }),
    ]).start();
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderError() {
  	if (this.props.error) {
  	  return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
  	  );
  	}

    // Placeholder for error text
    return (
      <View style={{ backgroundColor: 'white' }}>
          <Text style={{
            fontSize: 16,
            alignSelf: 'center',
            color: 'white'
          }}>
            Nah
          </Text>
      </View>
    )
  }

  renderButton() {
    if (this.props.loading) {
      return <SkypeIndicator color='#ffcd00' />;
    }
    

    return (
      <MyButton
        onPress={this.onButtonPress.bind(this)}
        pwChanged={this.props.password}
        idChanged={this.props.email}
      >
        Log In
      </MyButton>
    );
  }

  renderRegister() {
    if (this.props.loading) {
      return (
        <Animatable.View 
          style={{flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center'}}
          animation='fadeOut'
          duration={800}
        >

        <View style={{ 
          backgroundColor: 'white',
          flex: 1,
          flexDirection: 'row',
          paddingTop: 5,
          justifyContent: 'center' }}>
        
          <Text style={styles.register}>
            Not yet registered?
          </Text>

          <Text style={styles.registerLink} onPress={() => (console.log(''))}>
            Sign Up
          </Text>

        </View>

        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={styles.registerLink} onPress={() => (console.log(''))}>
              Forgot Password?
          </Text>
        </View>

      </Animatable.View>
      )
    }

    return (
      <View style={{flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center'}}>

        <View style={{ 
          backgroundColor: 'white',
          flex: 1,
          flexDirection: 'row',
          paddingTop: 5,
          justifyContent: 'center' }}>
        
          <Text style={styles.register}>
            Not yet registered?
          </Text>

          <Text style={styles.registerLink} onPress={() => (console.log(''))}>
            Sign Up
          </Text>

        </View>

        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={styles.registerLink} onPress={() => (console.log(''))}>
              Forgot Password?
          </Text>
        </View>

      </View>
    );
  }



  render() {
  	return (

      <Animated.View style={[styles.bla, {paddingBottom: this.keyboardHeight}]}>

        <Animatable.View animation='fadeIn' style={styles.imageContainer}>
          <Animatable.Image
            source={require("../images/SLogo.png")}
            style={[styles.logo, {height: this.imageHeight, width: this.imageHeight}]}
            animation="fadeInDown"
            duration={1075}
          />
        </Animatable.View>

        <View style={{
          flex: 1,
          justifyContent: 'flex-start',
          flexDirection: 'column'
        }}>

        <View style={{height: 10}} />
            <View style={{width: 360, alignSelf: 'center',}}>
              <TextField
                label='Email'
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                tintColor="#e5b800"
                activeLineWidth={1}
                lineWidth={0.5}
                labelHeight={24}
                inputContainerPadding={6}
                labelPadding={0}
                autoCapitalize={'none'}
                autoCorrect={false}
              />
            
              <TextField
                secureTextEntry
               label="Password"
               onChangeText={this.onPasswordChange.bind(this)}
               value={this.props.password}
               tintColor="#e5b800"
               activeLineWidth={1}
               lineWidth={0.5}
                labelHeight={24}
                inputContainerPadding={6}
                labelPadding={0}
                autoCapitalize={'none'}
                autoCorrect={false}
              />
            </View>
        
        
      
          <Animatable.View 
            style={styles.buttonContainer}
            animation='zoomIn'
            duration={1075}
          >
            {this.renderButton()}
          </Animatable.View>
        

          <View>
            {this.renderError()}
          </View>

          {this.renderRegister()}

        </View>

      </Animated.View>

      
  	);
  }
}

const styles = {
  bla: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  },
  containerStyle: {
    borderBottomWidth: 0.5,
    padding: 5,
    backgroundColor: 'ffcd00',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#cccccc',
    position: 'relative',
    marginLeft: 25,
    marginRight: 25
  },
  buttonContainer: {
    height: 70,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcd00',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1
  },
  logo: {
    width: 250,
    height: 250,
  },
  register: {
    paddingHorizontal: 2,
    fontFamily: 'Helvetica Neue',
    fontSize: 14
  },
  registerLink: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    color: "#e5b800",
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, loginUser 
  })(LoginForm);
