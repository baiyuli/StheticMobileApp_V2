import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Survey, CardSection } from '../common';
import { Divider } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

class SurveyDetail extends Component {
	render() {
	  console.log(this.props);
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
            size={34} 
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
        
            <Animatable.Image
              source={{ uri: 'file:////Users/baiyu/Documents/StheticDemo/Sthetic_v1/src/images/'+picture}}
              style={styles.surveyImage}
              animation="fadeIn"
              duration={1075}
              delay={350}
            />

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
  }
}

export default SurveyDetail;
