import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import FeatureSortAndFilter from '../FiturSort';
import JSON from '../../../MOCK_DATA.json'

function Feature() {
    const [search, setSearch] = useState('')

    return (
        <div>
            <Container>
                <div className="searchButton">
                    <form class="form-inline my-0 my-lg-0">
                        <input class="form-control mr-sm-1 searching" type="search" placeholder="Search" aria-label="Search....." onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
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