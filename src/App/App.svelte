<script>
import Loader from '../Loader/Loader.svelte';
import Login from './Login/Login.svelte';
import Main from './Main/Main.svelte';

import { user } from '../store.js';

import * as firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

// default state: undefined
// logged in: object
// logged off: null
firebase.auth().onAuthStateChanged(_user => {
  user.setUser(_user);
});
</script>

<main>
	{#if $user === undefined} 
		<Loader />
	{:else if $user === null} 
		<Login />
	{:else} 
		<Main />
	{/if}
</main>

<style>
	@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,700");

	:global(body) {
		font-family: Roboto, arial, sans-serif;
		background-color: #1abc9c;
		height: 100vh;
		margin: 0;	
	}

	main {
		padding: 1em;
		max-width: 1024px;
		margin: 0 auto;
		height: 100%;
		box-sizing: border-box;
	}
</style>