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
    constructor(props) {
        super(props);
        
        this.state= { term: 'Search Here' };
    }
    
    render() {
        return (
            <div>
                <input
                    value= {this.state.term}
                    onChange= {(event) => this.setState({ term: event.target.value })} />
            </div>
            );
    }
}
    
export default SearchBar;