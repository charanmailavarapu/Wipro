import React, {Component} from 'react';
import './postuser.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as postuserActions from "../../store/postuser/actions";
export default class postuser extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-postuser">Hello! component postuser</div>;
    }
  }
// export default connect(
//     ({ postuser }) => ({ ...postuser }),
//     dispatch => bindActionCreators({ ...postuserActions }, dispatch)
//   )( postuser );