import React from 'react';
import "./NotFound.css";
import not_found from "../../images/notFound/notFound.jpg";

const NotFound = () => {
    return (
        <div>
            <div className='not-found'>
                <img className='w-100' src={not_found} alt="" />
            </div>
        </div>
    );
};

export default NotFound;