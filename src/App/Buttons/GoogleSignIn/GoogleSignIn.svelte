<script>
import SvgLogo from '../../../../assets/GoogleLogo.svg';
import { user } from '../../../store.js';

import * as firebase from "firebase/app";
import "firebase/auth";

const handleClick = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
        const token = result.credential.accessToken;

        user.setUser({token, ...result.user});
    }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;

        console.log(error);

        // @TBD
    });
}
</script>

<div on:click={handleClick} class="button">
    <div class="button__wrapper">
        <div class="button__element">
            <div class="button__logo">
            {@html SvgLogo}
            </div>
        </div>
        <span class="button__content">
            <span>Sign in with Google</span>
        </span>
    </div>
</div>

<style>
    .button {
        height: 50px;
        width: 240px;
        border-radius: 1px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
        transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
        -webkit-appearance: none;
        background-image: none;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        position: relative;
        vertical-align: middle;
        white-space: nowrap;
        width: auto;
        border: none;
        background-color: #fff;
        color: #444;
    }

    .button .button__wrapper {
        border: 1px solid transparent;
    }

    .button__wrapper {
        height: 100%;
        width: 100%;
    }

    .button .button__element {
        background-color: #fff;
        -webkit-border-radius: 1px;
        border-radius: 1px;
        padding: 15px;
    }

    .button .button__element .button__logo {
        width: 18px;
        height: 18px;
    }

    .button__element {
        float: left;
    }

    .button__content {
        font-family: Roboto, arial, sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 48px;
        letter-spacing: 0.21px;
        margin-left: 6px;
        margin-right: 6px;
        vertical-align: top;
    }
</style>