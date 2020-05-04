import React from 'react';

const ShowSuccessTitle = ({ showSuccessMessage }) => {
    if (showSuccessMessage) {
        return <div className='success'>Login Successfull</div>;
    }

    return null;
};

export default ShowSuccessTitle;
