import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { journeys: null }
  }

  componentDidMount() {
    // const userId =
    // fetch(`https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/travel/record/user/:${userId}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Accept": "application/json",
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*"
    //     }
    //   })
    //   .then(data => data.json())
    //   .then(body => {
    // this.setState({journeys: body.data});
    // })
    this.setState({journeys: [{
      "_id": "5e1c51805a41cf6b38a03d56",
      "user": "5e1c50beb4cc536b2300eaad",
      "mode": "transit",
      "distance": 20,
      "carbon": 30,
      "__v": 0,
      "date": "2020-01-13T14:52:09.952Z"
    },
    {
      "_id": "5e1c52264f6eae6b5a492942",
      "mode": "driving",
      "distance": 100,
      "carbon": 90,
      "user": "5e1c50beb4cc536b2300eaad",
      "__v": 0,
      "date": "2020-01-13T14:52:09.953Z"
    },
    {
      "_id": "5e1c529363f0d66b75c14b85",
      "mode": "driving",
      "distance": 5,
      "carbon": 20,
      "user": "5e1c50beb4cc536b2300eaad",
      "__v": 0,
      "date": "2020-01-13T14:52:09.954Z"
    },]})
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
