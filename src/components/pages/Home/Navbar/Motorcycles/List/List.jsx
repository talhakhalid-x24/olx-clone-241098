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
                        honda 125
                    </a>
                    <a class="nav-link" href="#">                    
                        yamaha
                    </a>
                    <a class="nav-link" href="#">                    
                        kawasaki
                    </a>
                    <a class="nav-link" href="#">                    
                        honda 70
                    </a>
                    <a class="nav-link" href="#">                    
                        suzuki
                    </a>
                    <a class="nav-link" href="#">                    
                        ybr
                    </a>
                    <a class="nav-link" href="#">                    
                        unique
                    </a>
                    <a class="nav-link" href="#">                    
                        heavy bike
                    </a>
                    <a class="nav-link" href="#">                    
                        super power
                    </a>
                    <a class="nav-link" href="#">                    
                        road prince
                    </a>
                    </div>
                </div>
            </nav>            
        </div>
        </>
    );
}

export default List;
