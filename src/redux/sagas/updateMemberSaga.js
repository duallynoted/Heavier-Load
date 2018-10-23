import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';


function* updateMember(action) {
    try {
        yield call(axios.put, `/profile/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_USER' });
        console.log('ACTIONDOTPAYLOAD', action.payload);
        
    } catch (error) {
        console.log('error updating member', error);
    }
};

function* updateMemberInfo() {
    yield takeLatest('UPDATE_MEMBER_INFO', updateMember);
  }

export default updateMemberInfo;
