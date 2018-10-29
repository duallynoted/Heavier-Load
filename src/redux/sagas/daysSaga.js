import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchDays(action){
  try{
      const response = yield axios.get(`/profile/days/${action.payload.id}`, action.payload);
      yield put({type: 'SET_DAYS', payload:response.data});
      console.log('DAYS: ', response.data);
  } catch (error) {
      console.log('error getting days', error);        
  }
}

function* daysSaga() {
  yield takeLatest('FETCH_DAYS', fetchDays)

}

export default daysSaga;
