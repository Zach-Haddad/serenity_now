import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

const audioContext = new AudioContext();
const analyser = audioContext.createAnalyser();

let preloadedState = {
  // setup analyser here;
  // need not store canvas ctx here, only used by visual component
  analyser: analyser
};

const configureStore = () => {
  const store = createStore(RootReducer, preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};


export default configureStore;
