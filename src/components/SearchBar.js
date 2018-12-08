/**
 * Create By : Janakiraman M
 * On : 08-Dec-2018
 * Comment : Create SearchBar component
 */
import React from 'react';
class SearchBar extends React.Component {
    state = {
            value : ''
        };
    onSubmitEvent = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.value)
    }
    render() {
        return (
            <div className="ui segment">            
                <form className="ui form" onSubmit={this.onSubmitEvent}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={(e) => this.setState({value:e.target.value})} value={this.state.value}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;