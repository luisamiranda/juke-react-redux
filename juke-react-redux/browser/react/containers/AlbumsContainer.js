import React, {Component} from 'react';
// import store from '../store';
import Albums from '../components/Albums';
import { connect } from 'react-redux';


const mapStateToProps = function (state) {
  return {
    albums: state.albums.list
  };
};

const AlbumsContainer = connect(
  mapStateToProps
)(Albums);

export default AlbumsContainer;
