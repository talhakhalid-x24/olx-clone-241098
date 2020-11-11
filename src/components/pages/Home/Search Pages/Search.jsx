import React from 'react';
import Cards from './Card/Cards';
import './search.css';
import {CardData , CardData1} from './Card/CardData';

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

const Search = () => {
    return (
        <div className="latest-search-container px-3">
            <div className="search-contain">
                <div className="search">
                    <div className="search-heading d-flex justify-content-between">
                        <h3 className="my-3">Based on your last search</h3>
                        <div className="view-more my-3">
                            <a href="#">View More</a>
                        </div>
                    </div>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item d-flex justify-content-around active">
                               {CardData.map(ncard)} 
                            </div>
                            <div className="carousel-item d-flex justify-content-around">
                                {CardData1.map(ncard)}
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
