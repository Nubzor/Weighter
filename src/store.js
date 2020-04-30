import { writable } from 'svelte/store';

function createUser() {
	const { subscribe, set, update } = writable(null);

	return {
		subscribe,
		setUser: () => set(user),
		logOut: () => set(undefined)
	};
}

export const user = createUser();