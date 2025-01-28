import {View,Text,StyleSheet} from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}> 
            <Text > Routing Successful</Text>
            <Text> Why is this not working</Text>
        </View>


    );



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Home;