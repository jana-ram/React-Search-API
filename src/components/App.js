/**
 * Create By : Janakiraman M
 * On : 08-Dec-2018
 * Comment : Create App Component
 */
import React from 'react';
import axios from '../api/unsplash';
import SeachBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = {
        images : []
    };
    onSearchSubmit = async term => {
        const response = await axios.get(
            'search/photos',
            {
                params : {
                    query : term
                }
            }
        );
        this.setState({
            images : response.data.results
        });
    }
    render() {        
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SeachBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}
export default App;