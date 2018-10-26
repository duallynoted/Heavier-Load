import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMeasurements(action) {
  try {
    const response = yield axios.get(`/profile/measurements/${action.payload.id}`);
    yield put({ type: 'SET_MEASUREMENTS', payload: response.data });
  
    
  } catch (error) {
    console.log('Measurements GET request failed', error);
  }
}

function* measurementsListSaga() {
  yield takeLatest('FETCH_MEASUREMENTS', fetchMeasurements);
}

export default measurementsListSaga;
