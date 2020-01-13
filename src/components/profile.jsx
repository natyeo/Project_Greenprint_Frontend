import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journeys: []
    };
  }

  render() {
    return fetch('https://cors-anywhere-project-greenprint.herokuapp.com/travel/record/user/:user_id')

  }

}


export default Profile;
