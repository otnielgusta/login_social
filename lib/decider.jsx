import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Context from './context';
import Login from './login';

export default function Decider(){
    const [authenticate] = useContext(Context);

    if (!authenticate.email) {
      return <Login />
    }else{
      return <View>
          {
                console.log(authenticate)

          }
        <Text>{authenticate.name}</Text>  
        <Text>{authenticate.email}</Text>  
      </View>
    }

}