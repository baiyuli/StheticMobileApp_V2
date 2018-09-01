import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { CardSection } from './common';
import Survey from './common/Survey'
import * as Animatable from 'react-native-animatable';
import { Divider } from 'react-native-material-ui';
import data from '../Surveys.json';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';


class homePage extends Component {
  state = { surveys: data };

  renderSurveys() {
    return this.state.surveys.map(survey =>
      <Survey key={survey.title} survey={survey} />);
  }

  render() {
    
    return (
      <View>
      <View 
          style={{backgroundColor: '#ffcd00',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          height: 60}}
        >
        <Animatable.View
          animation='fadeIn'
          duration={1075}
          delay={500}
        >
          <Icon 
            iconStyle={styles.iconStyle}
            containerStyle={styles.iconStyle}
            name='menu' 
            underlayColor='transparent'
            size={32}
            onPress={() => Actions.drawerOpen()}
          />
        </Animatable.View>

          <Animatable.Text 
            style={styles.headerTextStyle}
            animation='fadeIn'
            duration={1075}
            delay={500}
          >
            What's New
          </Animatable.Text>
        </View>
      <ScrollView style={{backgroundColor: '#ffcd00', height: 610}} >
        <View style={{height: 10, backgroundColor: '#ffcd00'}} />

        {this.renderSurveys()}
      </ScrollView>
      </View>
    );
  }
}

const styles = {
  surveyImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  cardTextStyle: {
    flex: 1
  },
  headerTextStyle: { 
    paddingTop: 25,
    paddingBottom: 10,
    paddingRight: 10,
    fontFamily: 'Helvetica Neue',
    fontSize: 23,
    fontWeight: 'bold'
  },
  iconStyle: {
    paddingTop: 13,
    paddingBottom: 10,
    paddingLeft: 5,
    backgroundColor: 'transparent'
  }

}

export default homePage;
