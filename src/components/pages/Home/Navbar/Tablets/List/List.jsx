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
                        iphone
                    </a>
                    <a class="nav-link" href="#">                    
                        samsung
                    </a>
                    <a class="nav-link" href="#">                    
                        oppo
                    </a>
                    <a class="nav-link" href="#">                    
                        infinix
                    </a>
                    <a class="nav-link" href="#">                    
                        vivo
                    </a>
                    <a class="nav-link" href="#">                    
                        huawie
                    </a>
                    <a class="nav-link" href="#">                    
                        nokia
                    </a>
                    </div>
                </div>
            </nav>            
        </div>
        </>
    );
}

export default List;
