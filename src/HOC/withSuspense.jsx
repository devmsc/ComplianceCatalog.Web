import {CircularProgress} from "@material-ui/core";
import React from 'react';

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<CircularProgress/>}><Component {...props}/></React.Suspense>
    }
}
