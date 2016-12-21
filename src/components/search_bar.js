/* Function based component
import React from 'react';

const SearchBar = () => {
    return <input />
}
        
export default SearchBar;

*/
    
//Class based Component

import React, { Component } from 'react';
    
class SearchBar extends Component {
    render() {
        return <input />;
    }
}
    
export default SearchBar;