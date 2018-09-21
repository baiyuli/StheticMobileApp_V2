import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Divider, Icon, Card } from 'react-native-material-ui';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';


class Survey extends Component {

  renderPicture() {
      if (this.props.survey.title === "google-keep"){
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

      if (this.props.survey.title === "facebook-moments"){
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

      if (this.props.survey.title === "apple-music"){
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

      if (this.props.survey.title === "igtv"){
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

      if (this.props.survey.title === "snkrs"){
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

  const { title, description, payout, length, picture } = this.props.survey;

  return (
      <TouchableOpacity
        onPress={() => Actions.SurveyDetail(this.props.survey)}
        activeOpacity={0.85}
        style={{
          backgroundColor: '#ffcd00',
          alignSelf: 'center',
          width: 350,
          height: 210,
          marginBottom: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'transparent',
          width: 335,
          height: 200,
       }}
      >
        <Animatable.View 
          style={{alignItems: 'center'}}
          animation='zoomIn'
          duration={1075}
          delay={200}
        >
          <CardSection style={styles.cardStyle}>
        
            {this.renderPicture()}

            <Divider style={{ container: { backgroundColor: '#cccccc'} }}/>

            <View style={{ alignSelf: 'center', marginTop: 5 }}>
              <Text style={{fontFamily: 'Helvetica Neue', fontSize: 15}}>
                {description}
              </Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{fontWeight: 'bold', fontFamily: 'Helvetica Neue'}}>
                {payout}
              </Text>
              <Text style={{fontWeight: 'bold', fontFamily: 'Helvetica Neue'}}>
                {length}
              </Text>
            </View>
          </CardSection>
        </Animatable.View>
      </TouchableOpacity>
  );
}
}

const styles = {
  cardStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    width: 335,
    height: 200,
    marginBottom: 10
  },
  surveyImage: {
    width: 250,
    height: 150,
    alignSelf: 'center',
  }
}


export default Survey;
