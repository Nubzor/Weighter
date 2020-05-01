import * as firebase from "firebase/app";
import "firebase/auth";

import { user } from '../../store.js';

const PROVIDERS = {
    FACEBOOK: () => new firebase.auth.FacebookAuthProvider,
    GOOGLE: () => new firebase.auth.GoogleAuthProvider,
}

export const providers = Object.keys(PROVIDERS).reduce((curr, next) => Object.assign({}, curr, {[next]: next}), {})

export default (providerType) => {
    console.log(providerType);
    const provider = PROVIDERS[providerType]();

    firebase.auth().signInWithPopup(provider).then(result => {
        const token = result.credential.accessToken;

        user.setUser({ token, ...result.user });
    }).catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;

        console.log(error);

        // @TBD
    });
}