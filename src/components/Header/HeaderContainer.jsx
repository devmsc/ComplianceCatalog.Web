import {connect} from "react-redux";
import React, {useEffect} from 'react';
import Header from "./Header";
import {becomeClient, becomeExpert, becomeManager} from "../../redux/auth-reducer";

const HeaderContainer = React.memo((props) => {
    return (
        <Header { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        role: state.auth.role
    };
}




export default connect(mapStateToProps, { becomeClient, becomeManager, becomeExpert })(HeaderContainer);
