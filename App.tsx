import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native'
import { Appbar, Button, Card, Text ,Avatar} from 'react-native-paper';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState<Array<{ userId: number; id: number; title: string; body: string }>>([]);
  function loadData() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(function (response) {
      setData(response.data)
    })
  }

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="API" />
      </Appbar.Header>
      <Button onPress={loadData} mode='contained' style={style.button}>Load Data</Button>
      <ScrollView>
        {
          data.length > 0 ?
            data.map((post) => (
              <Card style={style.card}>
                <Card.Title  title={post.title} titleNumberOfLines={10}
                  left={(props) => <Avatar.Text size={50} label={post.id.toString()}/>}
                />
                <Card.Content >
                  <Text>{post.body}</Text>
                </Card.Content>
              </Card>
            )) : <Text>{"No Data"}</Text>
        }
      </ScrollView>


    </View>
  );
}

const style = StyleSheet.create({
  button: {
    margin: 30
  },
  card:{
    margin:10
  },
  
})

export default App;
