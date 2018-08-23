import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Divider, Icon, Card } from 'react-native-material-ui';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';


const Survey = ({ survey }) => {
  console.log(survey);
  const { title, description, payout, length, picture } = survey;

  return (
      <Card
        onPress={() => Actions.SurveyDetail(survey)}
        style={{ container: {
          backgroundColor: '#ffcd00',
          alignSelf: 'center',
          width: 335,
          height: 200,
          marginBottom: 10
        } }}
      >
        <Animatable.View 
          style={{alignItems: 'center'}}
          animation='zoomIn'
          duration={1075}
          delay={200}
        >
          <CardSection style={styles.cardStyle}>
        
            <Animatable.Image
              source={{ uri: 'file:////Users/baiyu/Documents/StheticDemo/Sthetic_v1/src/images/'+picture}}
              style={styles.surveyImage}
              animation="fadeIn"
              duration={1075}
              delay={500}
            />

            <Divider style={{ container: { backgroundColor: '#cccccc'} }}/>

            <View style={{ alignSelf: 'center', marginTop: 5 }}>
              <Text>{description}</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>{payout}</Text>
              <Text>{length}</Text>
            </View>
          </CardSection>
        </Animatable.View>
      </Card>
  );
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    position: 'relative',
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
