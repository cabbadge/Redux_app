
import {all} from 'redux-saga/effects'
import {cashWatcher} from "./cashSaga";
import {userWatcher} from "./userSaga";


export function* rootWatcher(){
    yield all([cashWatcher(),userWatcher()])
}