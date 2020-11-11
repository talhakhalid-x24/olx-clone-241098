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
                        mehran
                    </a>
                    <a class="nav-link" href="#">                    
                        cultus
                    </a>
                    <a class="nav-link" href="#">                    
                        honda city
                    </a>
                    <a class="nav-link" href="#">                    
                        vitz
                    </a>
                    <a class="nav-link" href="#">                    
                        alto
                    </a>
                    <a class="nav-link" href="#">                    
                        honda civic
                    </a>
                    <a class="nav-link" href="#">                    
                        suzuki bolan
                    </a>
                    <a class="nav-link" href="#">                    
                        jeep
                    </a>
                    <a class="nav-link" href="#">                    
                        toyota corolla
                    </a>
                    <a class="nav-link" href="#">                    
                        fx
                    </a>
                    </div>
                </div>
            </nav>            
        </div>
        </>
    );
}

export default List;
