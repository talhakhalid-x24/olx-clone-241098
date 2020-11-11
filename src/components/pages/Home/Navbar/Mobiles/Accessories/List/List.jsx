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
                        mobiles
                    </a>
                    <a class="nav-link" href="#">                    
                        airpods
                    </a>
                    <a class="nav-link" href="#">                    
                        power bank
                    </a>
                    <a class="nav-link" href="#">                    
                        laptop
                    </a>
                    <a class="nav-link" href="#">                    
                        pubg trigger
                    </a>
                    <a class="nav-link" href="#">                    
                        smart watch
                    </a>
                    <a class="nav-link" href="#">                    
                        iphone
                    </a>
                    <a class="nav-link" href="#">                    
                        handfree
                    </a>
                    <a class="nav-link" href="#">                    
                        tablet
                    </a>
                    <a class="nav-link" href="#">                    
                        tab
                    </a>
                    </div>
                </div>
            </nav>            
        </div>
        </>
    );
}

export default List;
