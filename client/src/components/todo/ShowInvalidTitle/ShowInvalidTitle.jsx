import React from 'react';

const ShowInvalidTitle = ({ hasLoginFailed }) => {
    if (hasLoginFailed) {
        return <div className='wrong alert alert-warning'>Invalid Credentials</div>;
    }

    return null;
};

export default ShowInvalidTitle;
