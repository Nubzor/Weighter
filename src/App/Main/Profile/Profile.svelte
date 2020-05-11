<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';

import Loader from '../../../Loader/Loader.svelte';
import Toggle from '../../Buttons/Toggle/Toggle.svelte';
import { user } from '../../../store.js';

const logOutOnClickHandler = () => firebase.auth().signOut()
    .then(function() {
        user.logOut();
    }, function(error) {
        console.log(error);
        // @TBD
    });

const db = firebase.database();

const onChangeCallback = (e, attribute) => {
    const { checked } = e.currentTarget;

    db.ref(`/users/${$user.uid}/settings`).update({
        [attribute]: !!checked,
    });
}

let extendedViewStatus;
let prefillStatus;

db.ref(`/users/${$user.uid}/settings`).once('value').then(snapshot => {
    const { extendedView, prefill } = snapshot.val()

    extendedViewStatus = extendedView;
    prefillStatus = prefill;
});
</script>

{#if extendedViewStatus === undefined}
    <Loader />
{:else}
    <div class="profile-container">
        <div class="profile-container--user-details">
            <div class="profile-container--user-details--user-logo">
                <img class="profile-container--user-details--image" src="{$user.photoURL}" alt="User photo" />
            </div>
            <div class="profile-container--user-details--user-name">
                <h3>{$user.displayName}</h3>
            </div>
            <div class="profile-container--user-details--email">
                <h4>{$user.email}</h4>
            </div>
        </div>
        <div class="profile-container--user-settings">
            <div class="profile-container--user-settings__entry profile-container--border">
                <Toggle 
                    label={'Pre-fill values base on last entry'} 
                    onChangeCallback={onChangeCallback}
                    checked={prefillStatus}
                    attribute="prefill"
                />
            </div>
            <div class="profile-container--user-settings__entry profile-container--border profile-container--without-top-border">
                <Toggle
                    label={'Extended mode'}
                    onChangeCallback={onChangeCallback}
                    checked={extendedViewStatus}
                    attribute="extendedView"
                />
            </div>
        </div>
        <button class="profile-container__button profile-container--border profile-container--without-top-border" on:click={logOutOnClickHandler}>Log out!</button>
    </div>
{/if}

<style>
    .profile-container {
        width: 100%;
        height: 100%;
        margin-top: 15%;
        box-sizing: border-box;
        
        -webkit-font-smoothing: antialiased;
    }

    .profile-container__button {
        width: 100%;
        height: 50px;
    }

    .profile-container--user-settings {
        margin-top: 10%;
    }

    .profile-container--border {
        background-color: #eee;
        border: none;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .profile-container--user-settings__entry {
        width: 100%;
        height: 50px;
    }

    .profile-container--without-top-border {
        border-top: none;
    }

    .profile-container--user-details {
        text-align: center;
    }

    .profile-container--user-details--user-logo {
        height: 35%;
        width: 35%;
        margin: auto;
    }

    .profile-container--user-details--image {
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }

    .profile-container--user-details--user-name h3 {
        font-weight: 500;
        margin-top: 3%;
        margin-bottom: 1%;
    }

    .profile-container--user-details--email h4 {
        font-weight: 400;
        margin-top: 1%;
        font-size: 12px;
    }
</style>