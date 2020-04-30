<script>
import Loader from '../Loader/Loader.svelte';
import Login from '../App/Login/Login.svelte';

import { user } from '../store.js';

import * as firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

const handleClick = () => user.logOut();

// default state: undefined
// logged in: object
// logged off: null
firebase.auth().onAuthStateChanged(_user => {
  user.setUser(_user);
});
</script>

<main>
	{#if $user === null} 
		<Loader />
	{:else if $user === undefined} 
		<Login />
	{:else} 
		<p on:click={handleClick}>Load the app</p>
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