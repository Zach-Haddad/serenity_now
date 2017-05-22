import { connect } from 'react-redux';
import SoundBoard from './sound_board.jsx';

const mapStateToProps = ({analyser}) => ({
  analyser: analyser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoundBoard);
