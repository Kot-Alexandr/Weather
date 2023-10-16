import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {

}

const autoComplete:any = createAction('AUTOCOMPLETE')

export default createReducer(initialState, {
    [autoComplete]: function (state) {
// запрос на автокомплит
    },
})