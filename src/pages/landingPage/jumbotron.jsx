import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './jumbotron.css';
import { Link } from 'react-router-dom';

const Jumbotron = () => {
    return (
        <div class="bckgrnd">
            <div class="jumbotron jumbotron-fluid">
                <h6 class="title">Alive and Kickin'</h6>
                <Link to='/browseFields'><button type="button" class="btn-jumb btn btn-link" >Book Now</button></Link>
            </div>
        </div>
    )
}

export default Jumbotron
