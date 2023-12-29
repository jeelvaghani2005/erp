import { all } from "redux-saga/effects";
import { getSubadminsaga, postSubadminsaga } from "./root/rootsubadmin";
import { deletefacultysaga, getfacultysaga, postfacultysaga, updatefacultysaga } from "./root/rootfaculty";
import { deletestudentsaga, getstudentsaga, poststudentsaga, updatestudentsaga } from "./root/rootstudent";

export function* rootSaga(){
    yield all([
        // getsubadmin
        getSubadminsaga(),
        // post subadmin
        postSubadminsaga(),

        
        // faculty
        getfacultysaga(),
        postfacultysaga(),
        deletefacultysaga(),
        updatefacultysaga(),

        // student
        getstudentsaga(),
        poststudentsaga(),
        deletestudentsaga(),
        updatestudentsaga(),

    ])
}