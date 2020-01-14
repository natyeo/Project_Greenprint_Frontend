import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie
} from 'recharts';
import './profile.css';
import { userService } from '../services/authentication.service'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { journeys: null }
  }

  componentDidMount() {
    const userId = userService.decodeTokenGetId()
    fetch(`https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/travel/record/user/${userId}`,
      {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(data => data.json())
      .then(body => {
        this.setState({journeys: body.data});
      })
    }

    distanceByMode(cycling, driving, transit, walking) {
      return this.state.journeys.forEach(
        function(elem) {
          if(elem.mode === "bicycling"){
            cycling.value += elem.distance
          } else if (elem.mode === "driving") {
            driving.value += elem.distance
          } else if (elem.mode === "transit") {
            transit.value += elem.distance
          } else if (elem.mode === "walking") {
            walking.value += elem.distance
          }
        }
      )
    }

    carbonPerJourney(journeys) {
      return journeys.reduce(function(result, journey) {
        if (journey.mode !== "bicycling" && journey.mode !== "walking")
          result.push({ name:journey.date.slice(0, 10), carbon:journey.carbon })
        return result;
      }, []);
    }

    render() {
      if (!this.state.journeys) {
        return <div />
      } else {
        const barData = this.carbonPerJourney(this.state.journeys);
        const cycling = {name: 'Cycling', value: 0};
        const driving = {name: 'Driving', value: 0};
        const transit = {name: 'Public transport', value: 0};
        const walking = {name: 'Walking', value: 0};

        this.distanceByMode(cycling, driving, transit, walking);

        const pieData = [cycling, driving, transit, walking]

        return (
          <div>
          <h1>My Journeys Dashboard</h1>
            <div id="barchart">
            <h2>Carbon per journey (kg)</h2>
              <BarChart width={600} height={300} data={barData}
                margin={{top: 5, right: 10, left: 100, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip/>
                <Legend />
                <Bar dataKey="carbon" fill="#8884d8" />
              </BarChart>
            </div>
            <div id="piechart">
              <h2>Distance travelled by mode of transport (miles)</h2>
              <PieChart width={800} height={400}>
                <Pie isAnimationActive={true} data={pieData} cx={400} cy={150} outerRadius={100} fill="#8884d8" label/>
                <Tooltip/>
              </PieChart>
            </div>
          </div>
        );
      }
    }
  }


  export default Profile;
