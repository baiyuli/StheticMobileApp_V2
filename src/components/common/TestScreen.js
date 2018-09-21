import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Draggable from 'react-native-draggable';
import { Actions } from 'react-native-router-flux';
import PopupDialog, { ScaleAnimation } from 'react-native-popup-dialog';
import CountdownCircle from 'react-native-countdown-circle';



class TestScreen extends Component{
	render(){
		return(
			<View style={{flex: 1}}>
				<View style={{ backgroundColor: '#e5a42a', height: 18}} />
				<Image
            		source={require("../../images/google-keep-1.jpeg")}
            		style={styles.mockup}
          		/>
					<Draggable 
                		reverse={false} 
                		renderColor='#ffcd00' 
                		renderShape='image'
                		renderSize={60} 
               		 	offsetX={31} 
                		offsetY={0}
                		imageSource={require("../../images/Icon.png")}
                		onPress={() => {this.popupDialog.show();}}
              		/>

              	<PopupDialog
              		ref={(popupDialog) => { this.popupDialog = popupDialog; }}
              		dialogAnimation={scaleAnimation}
              		containerStyle = {styles.popup}
              		height = {200}
              		width = {300}
              		show
              	>
              		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      					<Text style={styles.popupText}>
      						Create a new list of tasks!
      					</Text>

      					<CountdownCircle
            				seconds={60}
            				radius={25}
            				borderWidth={2}
            				color="#ffcd00"
            				bgColor="white"
            				shadowColor="white"
            				textStyle={{ fontSize: 15 }}
            				onTimeElapsed={() => Actions.TestScreen2}
        				/>

      					<TouchableOpacity style={styles.popupButton}>
      						<Text style={styles.popupTextSml}> Show Hint </Text>
      					</TouchableOpacity>
    				</View>
              	</PopupDialog>

              	<TouchableOpacity 
              		style={styles.answer}
              		onPress={()=>Actions.TestScreen2()}
              	>
              	</TouchableOpacity>
			</View>
		)
	}
}

const scaleAnimation = new ScaleAnimation({
	toValue:0
})

const styles = {
	mockup: {
		height: 718,
		width: 414
	},
	popup: {
		elevation: 5,
	},
	popupText: {
		fontFamily: 'Helvetica Neue',
    	fontSize: 20,
    	fontWeight: 'bold'
	},
	popupTextSml: {
		fontFamily: 'Helvetica Neue',
    	fontSize: 16,
	},
	popupButton: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 30,
		width: 100,
		backgroundColor: '#ffcd00',
		borderRadius: 5,
		borderWidth: 1,
    	borderColor: '#ffcd00',
    	shadowColor: '#000',
    	shadowOffset: { width: 0, height: 1 },
    	shadowOpacity: 0.5,
    	shadowRadius: 2,
    	elevation: 2
	},
	answer: {
		backgroundColor: 'transparent',
		height: 45,
		width: 45,
		position: 'absolute',
		marginTop: 687,
		marginLeft: 201
	}
}

export default TestScreen;