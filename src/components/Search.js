import React, {Component} from 'react'; 

class Serach extends Component {

    state = {artistQuery: ''}; 

    updateArtistQuery = e => {
        this.setState({artistQuery: e.target.value}); 
    }

    handleKeyPress = e =>{
        if(e.key == "Enter"){
            this.searchArtist(); 
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery); 
    }

    render() {
        return(
            <div>
                <input 
                    onChange={this.updateArtistQuery} 
                    onKeyPress={this.handleKeyPress}
                    placeholder="Search for an Artist"
                />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default Serach; 