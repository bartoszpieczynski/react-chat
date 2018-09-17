import React, { Component } from "react";

import firebase from "firebase";
import withAuthorization from "../../hoc/withAuthorization";

import { connect } from "react-redux";
import { compose } from "recompose";

class Homepage extends Component {
   state = {
      users: null
   };

   componentDidMount() {
      const { onSetUsers } = this.props;
      firebase
         .database()
         .ref("users")
         .once("value")
         .then(snapshot => onSetUsers(snapshot.val()));
   }

   render() {
      const { users } = this.props;

      return (
         <div>
            <h1>Home Page</h1>
            <p>The Home Page is accessible by every signed in user.</p>
            {!!users && <UserList users={users} />}
         </div>
      );
   }
}

const UserList = ({ users }) => (
   <div>
      <h2>List of Usernames of Users</h2>
      <p>(Saved on Sign Up in Firebase Database)</p>

      {Object.keys(users).map(key => (
         <div key={key}>{users[key].username}</div>
      ))}
   </div>
);

const mapStateToProps = state => ({
   users: state.userState.users
});

const mapDispatchToProps = dispatch => ({
   onSetUsers: users => dispatch({ type: "USERS_SET", users })
});


export default compose(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )
)(Homepage);
