import {put, takeEvery} from 'redux-saga/effects'
import {addCashAction, async_addCash, async_getCash, getCashAction} from "../Store/CashReduser";

const delay=(ms)=>new Promise(res=>setTimeout(res,ms))

function* addWorker(){
    yield delay(1000)
    yield put(addCashAction())
}
function* getWorker(){
    yield delay(1000)
    yield put(getCashAction())
}
export function* cashWatcher(){
    yield takeEvery(async_addCash,addWorker)
    yield takeEvery(async_getCash,getWorker)
}