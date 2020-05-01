import { writable } from 'svelte/store';

const createUser = () => {
	const { subscribe, set } = writable(undefined);

	return {
		subscribe,
		setUser: user => set(user),
		logOut: () => set(null)
	};
}

export const user = createUser();