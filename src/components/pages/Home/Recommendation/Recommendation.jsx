import React from 'react';
import Cards from './Card/Cards';
import CardData from './Card/CardData';
import './recommendation.css';
import { Button } from '@material-ui/core';

const ncard = (val) => {
    return(
        <Cards 
            src = {val.src}
            title = {val.title}
            price = {val.price}
            time = {val.time}
        />
    )
}

const Recommendation = () => {
    return (
        <div className="latest-recommand-container px-3">
            <div className="recommand-contain">
                <div className="recommand">
                    <div className="recommand-heading">
                        <h3 className="my-3">Fresh recommendations</h3>
                    </div>
                    <div className="container">
                        <div className="row">
                            {CardData.map(ncard)}
                        </div>
                    </div>
                </div>
            </div>
            <footer>
            <Button variant="contained" color="primary" href="#contained-buttons" className="load-more-button">
                Load More
            </Button>
            </footer>
        </div>
    );
}

export default Recommendation;
