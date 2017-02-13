import React, {Component} from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import {connect} from 'react-redux';

const mapStateToProps = function (state, ownProps) {

  return {
      artists: state.artists
    }
};

const FilterableArtistsContainer = connect(
  mapStateToProps
  )(class extends Component {
  constructor(props){
    super()
    this.state = Object.assign({}, {inputValue: ''}, props.artists)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
     this.setState({
       inputValue: evt.target.value
     });
  }
  
  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.list.filter(artist => 
      artist.name.match(inputValue));
    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}
);

export default FilterableArtistsContainer;
