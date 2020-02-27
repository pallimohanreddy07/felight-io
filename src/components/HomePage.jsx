import React from 'react';
import './HomePage.style.scss';
const HomePage=()=>(

    <div className="Homepage">
        <h1>Felight-io</h1>

        <div className="Categories-Container">
            <div className="Category-item">
                <div className="Content-Holder">
                    <div className="Title"><h2>Java Full Stack</h2></div>
                    <span className="Sub-Title">Know More</span>
                </div>
            </div>

            <div className="Category-item">
                <div className="Content-Holder">
                    <div className="Title"><h2>Java Script Full Stack</h2></div>
                    <span className="Sub-Title">Know More</span>
                </div>
            </div>

            <div className="Category-item">
                <div className="Content-Holder">
                    <div className="Title"><h2>Python Full Stack</h2></div>
                    <span className="Sub-Title">Know More</span>
                </div>
            </div>

            <div className="Category-item">
                <div className="Content-Holder">
                    <div className="Title"><h2>Data Science</h2></div>
                    <span className="Sub-Title">Know More</span>
                </div>
            </div>

        </div>
    </div>
)
export default HomePage;