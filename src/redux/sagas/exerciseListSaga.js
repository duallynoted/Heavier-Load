import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchExercises(action) {
  try {
    const response = yield axios.get(`/profile/${action.payload.id}`);
    yield put({ type: 'SET_EXERCISES', payload: response.data });
  } catch (error) {
    console.log('Exercise GET request failed', error);
  }
}

function* exerciseListSaga() {
  yield takeLatest('FETCH_EXERCISES', fetchExercises);
}

export default exerciseListSaga;
