import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	},
	reducers: {
		// login & logout actions affects the user session
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: state => {
			// reset user back to null
			state.user = null;
		},
	},
});

// it gives access to these two actions outside of the class
export const { login, logout } = userSlice.actions;

// use the selector to pull user details from the global state(store)
export const selectUser = state => state.user.value;

export default userSlice.reducer;
