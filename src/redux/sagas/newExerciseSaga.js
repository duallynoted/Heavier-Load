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

function* updateLoad(action){
    try {
        yield call(axios.put, `/profile/updateload/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_USER' });
        console.log('UPDATELOAD', action.payload);
        
    } catch (error) {
        console.log('error updating user', error);
    }
}

function* deleteExercise(action){
    try {
        yield call(axios.delete, `/profile/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_USER' });
        console.log('DELETEEXERCISE', action.payload);
        
    } catch (error) {
        console.log('error updating user', error);
    }
}


function* addNewExercise() {
    yield takeLatest('ADD_EXERCISE', addExercise);
    yield takeLatest('UPDATE_LOAD', updateLoad)
    yield takeLatest('DELETE_EXERCISE', deleteExercise)
  }

export default addNewExercise;
