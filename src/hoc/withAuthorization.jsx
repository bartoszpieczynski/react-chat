import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";

import firebase from "firebase";

const withAuthorization = condition => Component => {
   class WithAuthorization extends React.Component {
      componentDidMount() {
         firebase.auth().onAuthStateChanged(authUser => {
            if (!condition(authUser)) {
               this.props.history.push("/home");
            }
         });
      }
      render() {
         return this.props.authUser ? <Component /> : null;
      }
   }

   const mapStateToProps = state => ({
      authUser: state.sessionState.authUser
   });

   return compose(
      withRouter,
      connect(mapStateToProps),
    )(WithAuthorization);
};

export default withAuthorization;
