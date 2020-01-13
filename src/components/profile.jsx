import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userId =
    fetch(`https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/travel/record/user/:${userId}`,
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

      const data = [
        { name: 'Date 1', uv: 4000 },
        { name: 'Date 2', uv: 3000 },
        { name: 'Date 3', uv: 2000 },
        { name: 'Date 4', uv: 2780 },
        { name: 'Page E', uv: 1890 },
      ];

      if (this.state.journeys) {
      return (
        <BarChart width={600} height={300} data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      }
      );
    }
  }


  export default Profile;
