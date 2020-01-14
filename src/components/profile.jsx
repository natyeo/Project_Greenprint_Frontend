import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector
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

    distanceByMode(cycling, walking, driving, transit) {
      this.state.journeys.map(
        function(ele) {
          if(ele.mode === "bicycling"){
            cycling.value += ele.distance
          } else if (ele.mode === "driving") {
            driving.value += ele.distance
          } else if (ele.mode === "transit") {
            transit.value += ele.distance
          } else if (ele.mode === "walking") {
            walking.value += ele.distance
          }
        }
      )
    }

    render() {
      if (!this.state.journeys) {
        return <div />
      } else {
        const barData = this.state.journeys.map(function(journey) {
          return { name:journey.date.slice(0, 10), carbon:journey.carbon }
        })

        const cycling = {name: 'Cycling', value: 0};
        const driving = {name: 'Driving', value: 0};
        const transit = {name: 'Public transport', value: 0};
        const walking = {name: 'Walking', value: 0};

        this.distanceByMode(cycling, driving, transit, walking);

        const pieData = [driving, transit, walking, cycling]

        return (
          <div>
          <h1>My Carbon Dashboard</h1>
            <div id="barchart">
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
              <h1>Distance travelled by mode of transport</h1>
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
