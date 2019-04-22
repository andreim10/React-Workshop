import React, { Component } from 'react';
import './App.css';
import BicycleList from './BicycleList';

let bicycles = [
  { name: "Road bike", description:"The term road bicycle is used to describe bicycles built for traveling at speed on paved roads. Some sources use the term to mean racing bicycle. Other sources specifically exclude racing bicycles from the definition, using the term to mean a bicycle of a similar style but built more for endurance and less the fast bursts of speed desired in a racing bicycle; as such, they usually have more gear combinations and fewer hi-tech racing features.",image:"https://www.99bikes.com.au/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/s/c/scultura_se_my18_my2018_aus-2.jpg" ,isChecked: false},
  { name: "City bike", description: "An utility bicycle, city bicycle, urban bicycle, European City Bike (ECB), classic bike or simply city-bike, is a bicycle designed for frequent short, moderately paced rides through relatively flat urban areas.",image:"https://cdn.shopify.com/s/files/1/0232/3305/products/state_bicycle_co_city_bike_rylee_13_large.jpg?v=1534834060", isChecked: false},
  { name: "Mountain bike", description: "A mountain bike or mountain bicycle (abbreviated MTB[1]) is a bicycle designed for off-road cycling. Mountain bikes share similarities with other bicycles, but incorporate features designed to enhance durability and performance in rough terrain.",image:"https://www.99bikes.com.au/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/1/8/18.sight.c.3.29.blu.grn_final-42_2.jpg", isChecked: false}
];

export default class App extends Component {
  state = {
    Bicycles: bicycles
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2> Bicycles </h2>
        </header>
        <BicycleList bicycles={this.state.Bicycles}/>
      </div>
    );
  }
}
