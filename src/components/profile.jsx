import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
    console.log(userId)
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

  render() {
    if (!this.state.journeys) {
      return <div />
    } else {
      const data = this.state.journeys.map(function(journey) {
        return { name:journey.date.slice(0, 10), carbon:journey.carbon }
      })

      return (
        <div>
        <h1>My Carbon Dashboard</h1>
          <div>
          <BarChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip/>
          <Legend />
          <Bar dataKey="carbon" fill="#8884d8" />
          </BarChart>
          </div>
      </div>
      );
    }
  }
}


  export default Profile;
