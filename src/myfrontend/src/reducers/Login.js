import { LOGIN } from "../actions/types";



const Login= (state = { loginData: [] }, action) => {
    const { type, payload } = action
    console.log('type', type, 'payload', payload)

    switch (type) {
        case LOGIN:

            return { ...state, loginData: [...state.loginData, payload] }

        default:
            return state;
    }


}

export default Login;