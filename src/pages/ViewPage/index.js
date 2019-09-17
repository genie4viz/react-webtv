import React from 'react';
import './index.css';

const ViewPage = props => {
    console.log(props.match.params.page, 'params')
    return (
        <div>View Page</div>
    )
}

export default ViewPage;