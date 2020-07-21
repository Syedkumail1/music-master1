import React, { Component } from 'react';

class Search extends Component {
        
    state = { artistQuery:'' };
    
    updateArtistQuery = event =>{
        // console.log('event.target.value',event.target.value);
        this.setState({artistQuery:event.target.value});
    }

    handleKeyPress = event =>{
        if(event.key === 'Enter'){
            this.searchArtist();
        }
    }

    searchArtist = () =>{
        this.props.searchArtist(this.state.artistQuery);//this searchArtist function is coming from the App.js through props
    }

    render() { 
        return ( 
            <div>
                <input 
                    onChange={this.updateArtistQuery} 
                    onKeyPress={this.handleKeyPress}
                    placeholder='Search for an artist'
                />
                <button onClick={this.searchArtist}>Search</button>
            </div>
         );
    }
}
 
export default Search;