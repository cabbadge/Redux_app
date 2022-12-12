
import {put, takeEvery,call } from 'redux-saga/effects'
import {addCustomerAction, async_addCustomer} from "../Store/CustomerReduser";
const fetchUsersFromApi=()=>fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
function* fetchUserWorker(){
    const data=yield call(fetchUsersFromApi)
    const json=yield call(()=>new Promise(res=>res(data.json())))
    yield put(addCustomerAction(json))
}
export function* userWatcher(){
   yield takeEvery(async_addCustomer, fetchUserWorker)

}