import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import BeachPage from './BeachPage'


class BeachList extends Component {
  constructor(props){
    super(props)
    this.state = {
      beachName: '',
      beachLat: '',
      beachLong: '',
      date: [],
      hour: [],
      shapeDetail: [],
      currentTime: [],
      beachSpotList: [],
      selectedBeach:null,
      size_ft: []
    }
    this.loadBeaches = this.loadBeaches.bind(this);
  }

    componentWillMount(){
      this.loadBeaches()
    }

    loadBeaches() {
      [1,2,3,4].forEach( (beach) => {
        let beachURL = `https://cors-anywhere.herokuapp.com/http://api.spitcast.com/api/spot/forecast/${beach}`
         $.get(beachURL, (res) => {
           let currentTime = new Date(new Date().getTime()).toLocaleTimeString()
           console.log("RES", res)
            this.setState({ beachSpotList : [...this.state.beachSpotList, res[0].spot_name] })
            this.setState({ date: res[0].date })
            this.setState({ hour: res[0].hour })
            // this.setState({ shapeDetail: res[0].shape_detail})
            // console.log("SHAPE DETAIL", this.state.tide);
            this.setState({ currentTime: currentTime})
            console.log("time:", currentTime);
          });
      });
    }

    //
    // getShapeDetail1 = (event) => {
    //   for (var i = 0; i < event.length; i++){
    //     this.setState({shapeDetail: event[i].shape_detail})
    //     console.log("Shape Detail", this.state.shapeDetail);
    //   }
    // }

//click events for each particular beach
//try to simplify
    selectedPleasurePoint = (event) => {
      console.log("Pleasure Point");
      // let shapeDetailArr = []
      // for (var i = 0; i < event.length; i++){
      //   shapeDetailArr.push(event[i].shape_detail);
      // }
      // this.setState(
      //   {shapeDetail: shapeDetailArr}
      // )
      // console.log("SHAPE DETAIL LINE 67", this.state.shapeDetail);
      this.setState({selectedBeach:0})
    }

    selectedSteamers = (event) => {
      console.log("STEAMERS");
      this.setState({selectedBeach:1})
    }

    selectedCowells = (event) => {
      console.log("COWELLS");
      this.setState({selectedBeach:2})
    }

    selected38th = (event) => {
      console.log("38th");
      this.setState({selectedBeach:3})
    }



    render(){
      if (this.state.selectedBeach === null) {
        return (
        <div className="list-group teal lighten-2 center">
            <h1> Santa Cruz Popular Beaches </h1>
              <h3><a href="#" className="list-group-item-action teal lighten-2" id="pleasure-point" onClick={this.selectedPleasurePoint}>{this.state.beachSpotList[0]}</a></h3>
              <h3><a href="#" className="list-group-item-action teal lighten-2" id="steamer-lane" onClick={this.selectedSteamers}>{this.state.beachSpotList[1]}</a></h3>
              <h3><a href="#" className="list-group-item-action teal lighten-2" id="cowells" onClick={this.selectedCowells}>{this.state.beachSpotList[2]}</a></h3>
              <h3><a href="#" className="list-group-item-action teal lighten-2" id="38th-ave" onClick={this.selected38th}>{this.state.beachSpotList[3]}</a></h3>
              <a className="waves-effect waves-light btn-large" href="#">Wave</a>
          </div>
        )
      } else if (this.state.selectedBeach === 0) {
        return (
          <BeachPage shapeDetail={this.state.shapeDetail} beachSpotList={this.state.beachSpotList[0]} date={this.state.date} currentTime={this.state.currentTime}/>
        );
      } else if (this.state.selectedBeach === 1) {
          return(
          <BeachPage beachSpotList={this.state.beachSpotList[1]} date={this.state.date} currentTime={this.state.currentTime}/>
          )
        }
          else if (this.state.selectedBeach === 2) {
          return (
            <BeachPage beachSpotList={this.state.beachSpotList[2]} date={this.state.date} currentTime={this.state.currentTime}/>
          )
        }
          else if (this.state.selectedBeach === 3) {
          return (
            <BeachPage beachSpotList={this.state.beachSpotList[3]} date={this.state.date} currentTime={this.state.currentTime}/>
          )
        }

      }

}


export default BeachList;

// console.log("responseData", res[1].latitude);
// this.setState({beachLat : res[1].latitude})
// console.log("beach Lat", this.state.beachLat);
