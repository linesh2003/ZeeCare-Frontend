import React from 'react'

const Biography = ({ imageUrl }) => {
    return (
        <div className="container biography">
            <div className="banner">
                <img src={imageUrl} alt="aboutImg"/>
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who we are</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aperiam voluptatum, velit ab impedit eaque nisi! Veritatis harum, dolor voluptatem ullam dolorum labore. Quisquam magni molestias quasi reiciendis quis doloribus unde debitis impedit pariatur rerum voluptate esse, porro, laudantium, libero perferendis saepe ipsa ipsam? Culpa qui maiores eum deleniti adipisci!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p> 
                    Lorem ipsum dolor sit amet.
                </p>
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam praesentium a vitae obcaecati architecto quos officia, veritatis iste sunt explicabo, consequatur magnam unde. Dignissimos natus maxime blanditiis repellendus incidunt? Et, eaque? Totam, officia deleniti?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, odit.
                </p>
                <p>
                    Lorem, ipsum dolor.
                </p>
            </div>
        </div>
    );
};

export default Biography;