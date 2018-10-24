import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';


function* addMeasurement(action) {
    try {
        yield call(axios.post, `/profile/measurements/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_USER' });
        console.log('ACTIONDOTPAYLOAD', action.payload);
        
    } catch (error) {
        console.log('error adding measurement', error);
    }
};

function* addNewMeasurement() {
    yield takeLatest('ADD_MEASUREMENT', addMeasurement);
  }

export default addNewMeasurement;
