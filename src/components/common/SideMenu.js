import React, { Component, PropTypes } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import { Icon, Divider } from 'react-native-material-ui';



class SideMenu extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style = {styles.logoContainer}>
          <Image 
            source={require("../../images/SLogo.png")}
            style = {styles.logo}
          />
          
          <View style={{ marginTop: 20, justifyContent: 'space-between'}}>
            <Text style = {styles.name}> Baiyu Li </Text>
            <Text style = {styles.rating}> 4.95 ★ </Text>
          </View>   
        </View>

        <View style = {styles.optionsContainer}>
          
          <TouchableOpacity style = {styles.iconLabel}>
            <Icon 
              name='history' 
              size={20} 
              style={{color: 'black', marginLeft: 30, marginRight: 10}}
            />
            <Text style={styles.optionsText}>
              Your Campaigns
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.iconLabel}>
            <Icon 
              name='settings' 
              size={20} 
              style={{color: 'black', marginLeft: 30, marginRight: 10}}
            />
            <Text style={styles.optionsText}>
              Settings
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.iconLabel}>
            <Icon 
              name='help' 
              size={20} 
              style={{color: 'black', marginLeft: 30, marginRight: 10}}
            />
            <Text style={styles.optionsText}>
              Help
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.iconLabel}>
            <Icon 
              name='insert-invitation' 
              size={20} 
              style={{color: 'black', marginLeft: 30, marginRight: 10}}
            />
            <Text style={styles.optionsText}>
              Invite
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = {
  logo: {
    height: 75,
    width: 75,
    marginTop: 20,
    marginLeft: 20
  },
  logoContainer:{
    height: 100,
    backgroundColor: '#ffcd00',
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    
  },
  rating: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    marginTop: 5,
    color: '#424242'
  },
  optionsContainer: {
    flexDirection: 'column',
    height: 200,
    justifyContent: 'space-around'
  },
  optionsText: {
    marginLeft: 0,
    fontFamily: 'Helvetica Neue',
    fontSize: 16
  },
  iconLabel: {
    flexDirection: 'row'
  }
}



export default SideMenu;
