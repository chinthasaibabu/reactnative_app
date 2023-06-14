import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:8000/api';

const authAxios = axios.create({
      baseURL : baseUrl,
});

export default function App() {
   const[students,setStudents]=useState([])

   useEffect(()=>{
    async function getAllStudent(){
      try {
        
        const students = await authAxios.get('/student');
        console.log(students.data);
        setStudents(students.data)
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudent();
   },[])
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
