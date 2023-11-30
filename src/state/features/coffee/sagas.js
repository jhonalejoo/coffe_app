import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getCoffees } from '../../../api/coffee';
import { getCoffeesErrors, getCoffeesLoading, getCoffeesSuccess } from './reducers';


function* getCoffesFlow(action) {
    try {
        const coffees = yield call(getCoffees,action.payload);
        yield put(getCoffeesSuccess(coffees));
    } catch (error) {
        yield put(getCoffeesErrors(error));
    }
}
function* CoffeeWatcher() {
    yield all([
        takeEvery(getCoffeesLoading.type, getCoffesFlow)
    ])
}

export default CoffeeWatcher;