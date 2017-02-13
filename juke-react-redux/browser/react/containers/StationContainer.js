import { connect } from 'react-redux';
import Station from '../components/Station';

const mapStateToProps = function (state, ownProps) {
  return {
      genreName = ownProps.params.genreName
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {};
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;