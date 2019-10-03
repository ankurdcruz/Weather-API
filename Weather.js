import React from 'react';
import { Text, Button, View, Image } from 'react-native';

class AssetExample extends React.Component {
  state = {
    data: null,
  };
  async handleClick() {
    var url =
      'https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=7545cbbf96881ad733463c5f68529c5c';
    var response = await fetch(url);
    var data = await response.json();
    this.setState({ data: data });
    //alert(data.main.temp - 273.15)
  }
  render() {
    return (
      <View>
        <Text>
          {this.state.data
            ? 'Current Temperature in Delhi is: ' +
              (this.state.data.main.temp - 273.15)
            : " Data doesn't exist"}
        </Text>
        {this.state.data ? (
          <Image
            style={{ width: 30, height: 30 }}
            source={{
              uri:
                'https://openweathermap.org/img/w/' +
                this.state.data.weather[0].icon +
                '.png',
            }}
          />
        ) : null}
        <Button
          title="Get the weather in Delhi"
          onPress={() => {
            this.handleClick();
          }}
        />
      </View>
    );
  }
}

export default AssetExample;