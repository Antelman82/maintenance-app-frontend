import React from 'react';

const Home = props => {
    return (
        <div className='home'>
            <p>Welcome to the Maintenance App</p>
            <p>This web app was created to help vehicle owners manage and
                 track repairs, routine maintenance, and other important information for each vehicle they own.
                 The goal is to allow users an easy way to remember what has and hasn't been done.
                 A typical problem people face is remembering the last time something was done to the vehicle.</p>
                 
            <p>This also comes in handy when trying to sell a vehicle and the buy wants to know the last time
                 the timing belt was replaced, or how often certain services were performed.</p>
                 
            <p>Note: this app isn't exclusive to cars or trucks, but could be used for boats, motorcycles, bicycles, and even your House.</p>
        </div>
    )
}
export default Home;