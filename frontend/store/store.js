import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();

let preloadedState = {
  // setup analyser here;
  // need not store canvas ctx here, only used by visual component
  analyser: analyser,
  audioCtx: audioCtx
};

const configureStore = () => {
  const store = createStore(RootReducer, preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};


export default configureStore;
