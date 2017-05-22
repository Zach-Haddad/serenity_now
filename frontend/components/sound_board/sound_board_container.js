import { connect } from 'react-redux';
import SoundBoard from './sound_board.jsx';

const mapStateToProps = ({analyser, audioCtx}) => ({
  analyser: analyser,
  audioCtx: audioCtx
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoundBoard);
