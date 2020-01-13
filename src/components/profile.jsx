import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journeys: []
    };
  }

  render() {
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
        this.setState(body.data);
      })

      const data = [
        { name: 'Page A', uv: 4000 },
        { name: 'Page B', uv: 3000 },
        { name: 'Page C', uv: 2000 },
        { name: 'Page D', uv: 2780 },
        { name: 'Page E', uv: 1890 },
      ];

      return (
        <BarChart width={600} height={300} data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      );

      ReactDOM.render(
        <SimpleBarChart />,
        document.getElementById('container')
      );
    }
  }


  export default Profile;
