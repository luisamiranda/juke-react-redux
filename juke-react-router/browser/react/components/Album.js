import React, {Component} from 'react';
import Songs from '../components/Songs';

export default class Album extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    //gets information from click
    const albumId = this.props.routeParams.albumId;
    //calls method from index.js
    const selectAlbum = this.props.selectAlbum;
    selectAlbum(albumId);
  }
  
  render () {
    const album = this.props.album;
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;
    return (  
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
    </div>)
  }
};
