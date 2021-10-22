import * as React from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Modal} from 'react-native';
export default class RecentPass extends React.Component{
    constructor(){
        super()
        this.state={
           passcodes:[],
           captha:'',
           capthaVeri:'',
           capthaTrue:false,
           showModal:true,
        }
    }
    verification=()=>{
      this.setState({captha:Math.random(0,1).toString(20)});
      <Modal visible={this.state.showModal}>
        <Text>{this.state.captha}</Text>
        <TextInput value={this.state.capthaVeri} onChangeText={()=>{
          if(this.state.captha==this.state.capthaVeri){
            this.setState({capthaTrue:true,showModal:false})
          }else{
            this.setState({capthaTrue:false})
          }
        }} />
      </Modal>
    }
    componentDidMount(){
      
      this.verification()
    }
    render(){
        if(this.capthaTrue){
          return(<View>
            <Text style={styles.text}>Hello Welcome to View page</Text>
            <TouchableOpacity 
            style={styles.button}
            onPress={()=>{
                this.props.navigation.navigate("GeneratePasscode")
            }}><Text style={styles.buttonText}>Click to relocate</Text></TouchableOpacity>
        </View>)
        }else{
          this.verification()
        }
    }
}const styles = StyleSheet.create({
    button: {
      backgroundColor: "grey",
      alignItems: "center",
      width: 190,
      height: 50,
      alignSelf: "center",
      justifyContent:'center',
      borderRadius:2,
      borderWidth:2
    },
    text: {
      textAlign:'center',
      marginTop: 50,
      padding: 20,
      fontSize: 30,
      
    },
    buttonText: {
      textAlign:'center',
      
      color:'orange',
    },
  });