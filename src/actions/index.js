import API from '../api';
import {
    GET_MACHINES_ERROR,
    GET_MACHINES_REQUEST,
    GET_MACHINES_SUCCESS,
} from "../constants";

export const getMachines = () => (
    (dispatch: Function) => {
        dispatch(getMachinesRequest());
        return getMachinesAPI()
            .then((machines) => {
                dispatch(getMachinesSuccess(machines));
            })
            .catch((err) => {
                dispatch(getMachinesError())
            });
    }
);

export const getMachinesRequest = () => (
    {
        type: GET_MACHINES_REQUEST,
        payload: { isLoading: true },
    }
);

export const getMachinesSuccess = (machines: object) => (
    {
        type: GET_MACHINES_SUCCESS,
        payload: { machines },
    }
);

export const getMachinesError = () => (
    {
        type: GET_MACHINES_ERROR,
    }
);

export const getMachinesAPI = () => {
    return new Promise((resolve, reject) => {
        API().get(`/machines`)
            .then(res => {
                console.log("++++++",res.data);
                // resolve(res.data.machines);
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
