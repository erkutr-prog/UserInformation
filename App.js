import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';

const App = (props) => {
  const[data, setData] = useState([]);
  const[isLoading, setLoading] = useState(true);
  
  const getUsers = async () => {
    try{
      await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((responseJSON) => {
        setData(responseJSON);
      })
    } catch {
      console.log("error")
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    getUsers();
    Navigation.updateProps('CustomComponent4', {
      onpress: getUsers
    })
  }, [])

  const getDetails = (item, index) => {
    Navigation.push(props.componentId, {
      component: {
        name: 'detailPage',
        passProps: {
          item: item,
          index: index
        },
        options: {
          topBar: {
            title: {
              text: item.name,
              color: '#F5D97E'
            },
            background: {
              color: '#041562'
            },
          }
        }
      }
    })
  }

  const Item = ({item, index}) => (
    <TouchableOpacity style={styles.item} onPress={() => getDetails(item, index) }>
      <Text style={styles.text}>{item.id}. {item.name}</Text>
    </TouchableOpacity>
  )

  const renderItem = ({item, index}) => (
    <Item item={item} />
  )

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#0000ff">
        </ActivityIndicator>
      ) : 
        (<FlatList
            data={data}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item => item.id)}
            ></FlatList>
          )
      }
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5D97E'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  item: {
    flex: 1,
    backgroundColor: '#EAFFD0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
});

export default App;

