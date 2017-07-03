import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD8mqklyFv_oJ9hyLdX2JvjyAH8lnMNP-c'

// Create a new component
// Should produce some HTML

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('.container'));