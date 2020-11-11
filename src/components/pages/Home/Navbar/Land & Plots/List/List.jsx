import React from 'react';
import './list.css';

const List = () => {
    return (
        <>
        <div className="main-list">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <h6 class="navbar-brand">Popular Searches:</h6>
                <div class="navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav list-mobile">
                    <a class="nav-link active" href="#">
                        house for rent
                    </a>
                    <a class="nav-link" href="#">                    
                        house for sale
                    </a>
                    <a class="nav-link" href="#">                    
                        houses for sale malir karachi
                    </a>
                    <a class="nav-link" href="#">                    
                        houses sialkot
                    </a>
                    <a class="nav-link" href="#">                    
                        plot
                    </a>
                    <a class="nav-link" href="#">                    
                        lahore
                    </a>
                    <a class="nav-link" href="#">                    
                        rawalpindi
                    </a>
                    </div>
                </div>
            </nav>            
        </div>
        </>
    );
}

export default List;
