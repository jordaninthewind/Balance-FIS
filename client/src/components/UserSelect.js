import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSelection: null,
    }

  }

  handleChange = (e) => {
    this.setState({
      userSelection: e.target.value,
    })
  }


  render() {

    const userSelection = this.props.users.map(user => {
      return <option value={user.id}>{user.name}</option>
    })

    return (
        <select onChange={this.handleChange}>
          {userSelection}
        </select>
      );
    }
}

UserSelect.defaultProps = {
  users: [{id: 0, name: "Jordan"}, 
          {id: 1, name: "Anna"}, 
          {id: 2, name: "Diego"}, 
          {id: 3, name: "Homer"}, 
          {id: 4, name: "Magellan"}]
  }

const mapStateToProps = state => {
  return { users: state.quotesReducer.users }
}

export default connect(mapStateToProps, null)(UserSelect);