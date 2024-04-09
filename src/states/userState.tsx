import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
    user: Object;
}

const initialState: UserState = {
    user: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<Object>) => {
            console.log(action.payload);
        },
    },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
