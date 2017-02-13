import React, {Component} from 'react';
import Artist from '../components/Artist';
import { connect } from 'react-redux';
import {toggleSong} from '../action-creators/player';


const mapStateToProps = function (state) {
  return {
    selectedArtist: state.artists.selected,
    player: state.player,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    toggleOne: function (song, list) {
     dispatch(toggleSong(song, list));
    }
  };
};

const ArtistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);

export default ArtistContainer;

