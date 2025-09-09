import React, {Component} from 'react';
import './postshow.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as postshowActions from "../../store/postshow/actions";
export default class postshow extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-postshow">Hello! component postshow</div>;
    }
  }
// export default connect(
//     ({ postshow }) => ({ ...postshow }),
//     dispatch => bindActionCreators({ ...postshowActions }, dispatch)
//   )( postshow );