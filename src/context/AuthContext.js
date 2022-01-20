import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return ({email, password}) => {
        // make signup api request

        // modify state now that we are authenticated

        // if we fail, send an error message
    }
}

const signin = (dispatch) => {
    return ({email, password}) => {
        // make signup api request

        // modify state now that we are authenticated

        // if we fail, send an error message
    }
}

const signout = (dispatch) => {
    return ({email, password}) => {
        // make signup api request

        // modify state now that we are authenticated

        // if we fail, send an error message
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signout},
    {isSignedIn: true})
