import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, MyButton, Spinner } from './common';
import * as Animatable from 'react-native-animatable';


class LoginForm extends Component {
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
      return <Spinner size="large" />;
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

      <View style={styles.bla}>

        <Animatable.View animation='fadeIn' style={styles.imageContainer}>
          <Animatable.Image
            source={require("../images/SLogo.png")}
            style={styles.logo}
            animation="fadeInDown"
            duration={1075}
          />
        </Animatable.View>

        <View style={{
          flex: 1,
          justifyContent: 'flex-start',
          flexDirection: 'column'
        }}>

        <View style={{height: 30}} />
          <CardSection style={ styles.containerStyle }>
            <Input
              placeholder="email"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection style={ styles.containerStyle }>
            <Input
              secureTextEntry
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
        
        
      
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

      </View>

      
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
