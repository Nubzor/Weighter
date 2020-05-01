<script>
import * as firebase from "firebase/app";
import "firebase/auth";

import { user } from '../../../store.js';

const onClickHandler = () => firebase.auth().signOut()
    .then(function() {
        user.logOut();
    }, function(error) {
        console.log(error);
        // @TBD
    });
</script>

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
    <button class="profile-container--button" on:click={onClickHandler}>Log out!</button>
</div>

<style>
    .profile-container {
        width: 100%;
        height: 100%;
        margin-top: 15%;
        box-sizing: border-box;
        
        -webkit-font-smoothing: antialiased;
    }

    .profile-container--button {
        width: 100%;
        height: 50px;
        /* background-color: #5BB9E6; */
        background-color: #eee;
        border: none;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
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