import { takeLatest } from '@redux-saga/core/effects';
import { GET_SUBADMIN_LIST_PROGRESS, POST_SUBADMIN_PROGRESS } from "../../subadmin/action/action";
import { handleGetsubadmin, handlePostsubadmin } from "../manegesubadmin/managesubadmin";

// get subadmin
export function* getSubadminsaga() {
    yield takeLatest(GET_SUBADMIN_LIST_PROGRESS, handleGetsubadmin)
}

// post subadmin
export function* postSubadminsaga() {
    yield takeLatest(POST_SUBADMIN_PROGRESS, handlePostsubadmin)
}