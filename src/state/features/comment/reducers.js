import { createSlice } from '@reduxjs/toolkit'
import { QUERIES_STATUS } from '../../../utils/constants';
const initialState = {
    getComments: {
        comments: [],
        hasError: false,
        isLoading: false,
        status: QUERIES_STATUS.NONE
    },
    createComments:{
        hasError: false,
        isLoading: false,
        status: QUERIES_STATUS.NONE
    },
    updateComments:{
        hasError:false,
        isLoading:false,
        status: QUERIES_STATUS.NONE
    },
    deleteComments:{
        hasError:false,
        isLoading:false,
        status: QUERIES_STATUS.NONE
    },
    comment:{},
}
export const coffeeSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getCommentsLoading: (state) => {
            state.getComments.isLoading = true;
            state.getComments.status= QUERIES_STATUS.LOADING;
        },
        getCommentsSuccess: (state,action) => {
            state.getComments.isLoading = false;
            state.getComments.status= QUERIES_STATUS.SUCCESS;
            state.getComments.comments = action.payload;
        },
        getCommentsErrors: (state) => {
            state.getComments.isLoading = false;
            state.getComments.status= QUERIES_STATUS.FAILURE;
            state.getComments.hasError = true;
        },
        createCommentsLoading: (state) => {
            state.createComments.isLoading = true;
            state.createComments.status= QUERIES_STATUS.LOADING;
        },
        createCommentsSuccess: (state,action) => {
            state.createComments.isLoading = false;
            state.createComments.status= QUERIES_STATUS.SUCCESS;
            state.createComments.comment = action.payload;
            state.getComments.comments =[...state.getComments.comments,action.payload.data]
        },
        createCommentsErrors: (state) => {
            state.createComments.isLoading = false;
            state.createComments.status= QUERIES_STATUS.FAILURE;
            state.createComments.hasError = true;
        },
        deleteCommentsLoading: (state) => {
            state.deleteComments.isLoading = true;
            state.deleteComments.status= QUERIES_STATUS.LOADING;
        },
        deleteCommentsSuccess: (state,action) => {
            state.deleteComments.isLoading = false;
            state.deleteComments.status= QUERIES_STATUS.SUCCESS;
            state.deleteComments.comment = action.payload;
        },
        deleteCommentsErrors: (state) => {
            state.deleteComments.isLoading = false;
            state.deleteComments.status= QUERIES_STATUS.FAILURE;
            state.deleteComments.hasError = true;
        },
        updateCommentsLoading: (state) => {
            state.updateComments.isLoading = true;
            state.updateComments.status= QUERIES_STATUS.LOADING;
        },
        updateCommentsSuccess: (state,action) => {
            state.updateComments.isLoading = false;
            state.updateComments.status= QUERIES_STATUS.SUCCESS;
            state.comment = action.payload;
        },
        updateCommentsErrors: (state) => {
            state.updateComments.isLoading = false;
            state.updateComments.status= QUERIES_STATUS.FAILURE;
            state.updateComments.hasError = true;
        }
    }
})

export const {
    getCommentsLoading,
    getCommentsSuccess,
    getCommentsErrors,
    createCommentsErrors,
    createCommentsLoading,
    createCommentsSuccess
} = coffeeSlice.actions;

export default coffeeSlice.reducer;