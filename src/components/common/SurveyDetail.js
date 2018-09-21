import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Survey, CardSection, MyButton, TestScreen } from '../common';
import { Actions } from 'react-native-router-flux';
import { Icon, Button, Divider } from 'react-native-elements';
import Draggable from 'react-native-draggable';



class SurveyDetail extends Component {
	
    renderPicture() {
      if (this.props.title === "google-keep"){
        return (
          <Animatable.Image
            source={require("../../images/google-keep.png")}
            style={styles.surveyImage}
            animation="fadeIn"
            duration={1075}
            delay={350}
          />
        )
      }

      if (this.props.title === "facebook-moments"){
        return (
          <Animatable.Image
            source={require("../../images/facebook-moments.png")}
            style={styles.surveyImage}
            animation="fadeIn"
            duration={1075}
            delay={350}
          />
        )
      }

      if (this.props.title === "apple-music"){
        return (
          <Animatable.Image
            source={require("../../images/apple-music.png")}
            style={styles.surveyImage}
            animation="fadeIn"
            duration={1075}
            delay={350}
          />
        )
      }

      if (this.props.title === "igtv"){
        return (
          <Animatable.Image
            source={require("../../images/igtv.jpg")}
            style={styles.surveyImage}
            animation="fadeIn"
            duration={1075}
            delay={350}
          />
        )
      }

      if (this.props.title === "snkrs"){
        return (
          <Animatable.Image
            source={require("../../images/snkrs.png")}
            style={styles.surveyImage}
            animation="fadeIn"
            duration={1075}
            delay={350}
          />
        )
      }
    }

  render() {
      const { title, description, payout, length, picture } = this.props;

		return (
		<View>

		<View 
      style={{backgroundColor:'#ffcd00', 
        height: 155,  
        alignItems: 'flex-start'
      }}
    >
      <Animatable.View
          animation='fadeIn'
          duration={1075}
          delay={350}
        >
          <Icon 
            name='arrow-back' 
            size={33} 
            onPress={() => Actions.homePage()}
            underlayColor='transparent'
            containerStyle = {styles.iconStyle}
            iconStyle = {styles.iconStyle}
          />
      </Animatable.View>
    </View>

	    <Animatable.View 
          style={{alignItems: 'center', 
            justifyContent: 'center',
            alignSelf: 'center', 
            position: 'absolute',
            marginTop: 70
          }}
          animation='zoomInDown'
          duration={1075}
          delay={0}
          height={100}
        >
          <CardSection style={styles.cardStyle}>
        
            {this.renderPicture()}

          </CardSection>
        </Animatable.View>

        <Animatable.View 
          style={{flex: 1, marginTop: 15, alignItems: 'center'}}
          animation="zoomInDown"
          duration={1075}
          delay={0}
        >
          <CardSection style={styles.textCardStyle}>
            <Animatable.View 
              style={{alignItems: 'center'}}
              animation="fadeIn"
              duration={1075}
              delay={350}
            >
                <Text style={styles.textStyle}>
                 {description}
               </Text>

               <Text style={{fontFamily: 'Helvetica Neue',
                       fontSize: 16, 
                       fontWeight: 'bold',
                       paddingTop: 25
               }}>
                  Follow the instructions and enjoy!
                </Text>
            </Animatable.View>
            <TouchableOpacity style={{height: 1, width: 315, backgroundColor: '#cccccc'}} />
            <Animatable.View 
              style={{flexDirection: 'row', alignItems: 'center', paddingTop: 50}}
              animation="fadeIn"
              duration={1075}
              delay={350}
            >
                <View>
                <Text style={styles.smallText}>
                  {"Time: " +length}
                </Text>
                <Text style={styles.smallText}>
                  {"Reward: " + payout}
                </Text>
                </View>

                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.6}
                  onPress={() => Actions.TestScreen()}
                >
                  <Icon
                    name='arrow-forward' 
                    size={32} 
                    underlayColor='transparent'
                  />
                </TouchableOpacity>
            </Animatable.View>
              
          </CardSection>
        </Animatable.View>

        </View>
		)
	}
}

const styles = {
  cardStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 1,
    position: 'relative',
    width: 335,
    height: 160,
    marginBottom: 10,
    marginTop: 75
  },
  textCardStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 1,
    position: 'relative',
    width: 335,
    height: 250,
    marginBottom: 10,
    marginTop: 75
  },
  surveyImage: {
    width: 250,
    height: 150,
    alignSelf: 'center',
  },
  iconStyle: {
    marginTop: 13,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'transparent',
  },
  textStyle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16
  },
  smallText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  buttonStyle: {
    height: 70,
    width: 70,
    backgroundColor: '#ffcd00',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#ffcd00',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 120,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default SurveyDetail;
