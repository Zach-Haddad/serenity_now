import { connect } from 'react-redux';
import Visual from './visual.jsx';

const mapStateToProps = ({analyser}) => ({
  analyser: analyser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Visual);
