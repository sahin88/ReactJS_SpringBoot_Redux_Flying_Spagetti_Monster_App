import { LOGIN } from "./types";

export const loginPage = (formData) => async (dispatch) => {
    console.log("formData from login function")
   

    try {

        dispatch({ type: LOGIN, payload: formData })




    } catch (error) {
        console.log("error from createSoftwareTools", error)

    }
}