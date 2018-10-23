import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';


function* addExercise(action) {
    try {
        yield call(axios.post, `/profile/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_USER' });
        console.log('ACTIONDOTPAYLOAD', action.payload);
        
    } catch (error) {
        console.log('error adding exercise', error);
    }
};

function* addNewExercise() {
    yield takeLatest('ADD_EXERCISE', addExercise);
  }

export default addNewExercise;
