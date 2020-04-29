<script>
import Loader from '../Loader/Loader.svelte';
import Login from '../App/Login/Login.svelte';
import * as firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

// firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;

//   console.log(user);
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...

//   console.log(error);
// });

// default state: undefined
// logged in: object
// logged off: null
let user;

// firebase.auth().onAuthStateChanged(_user => {
//   user = _user;
// });
</script>

<main>
	{#if user === null} 
		<Loader />
	{:else if user === undefined} 
		<Login />
	{:else} 
		<p>Load the app</p>
	{/if}
</main>

<style>
	@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,700");

	:global(body) {
		font-family: Roboto, arial, sans-serif;
		background-color: #1abc9c;
		height: 100vh;
	}

	main {
		padding: 1em;
		max-width: 1024px;
		margin: 0 auto;
		height: 100%;
		box-sizing: border-box;
	}
</style>