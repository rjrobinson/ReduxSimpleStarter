import React, {Component} from 'react';


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: 'Search Here . . .'};
    }

    render() {
        return (
            <div>
                <input //controlled component where the value is set by state
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value})}/>
            </div>
        );
    }

}

export default SearchBar;