import { call, put } from 'redux-saga/effects';
import { GetSubadmin, PostSubadmin } from '../../subadmin/api/api';
import { GET_SUBADMIN_LIST_ERROR, GET_SUBADMIN_LIST_SUCCESS, POST_SUBADMIN_ERROR, POST_SUBADMIN_SUCCESS } from '../../subadmin/action/action';

export function* handleGetsubadmin(action) {
    try {
        const res = yield call(GetSubadmin, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            yield put({ type: GET_SUBADMIN_LIST_SUCCESS, data })
        }
        else {
            yield put({ type: GET_SUBADMIN_LIST_ERROR, data })
        }
    } catch (e) {
        yield put({ type: GET_SUBADMIN_LIST_ERROR, e })
    }
}

export function* handlePostsubadmin(action) {
    try {
        const res = yield call(PostSubadmin, action)
        const data = res.data
        const status = res.status
        
        if (status === 200) {
            yield put({ type: POST_SUBADMIN_SUCCESS, data })
        }
        else {
            yield put({ type: POST_SUBADMIN_ERROR, data })
        }
    } catch (e) {
        yield put({ type: POST_SUBADMIN_ERROR, e })
    }
}