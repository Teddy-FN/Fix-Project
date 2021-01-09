import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import FeatureSortAndFilter from '../FiturSort';

function Feature() {
    return (
        <div>
            <Container>
                <div className="searchButton">
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2 searching" type="search" placeholder="Search" aria-label="Search" />
                        <button type="button" class="btn btn-success buttonSearch">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>
                <FeatureSortAndFilter />
            </Container>
        </div >
    )
}

export default Feature;