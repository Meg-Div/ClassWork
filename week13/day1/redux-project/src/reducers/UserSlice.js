import { UserSlice } from "@reduxjs/toolkit";

const initalState = {
  name: "Meg",
  settings: "dark",
  address: "123 Main st",
};

export const userSlice = createSlice({
  name: "counter",
  initalState,
  reducers: {
    changeUserName: (state) => {
      state.value.name = "Mags";
    },
    changeUserSettingsLight: (state) => {
      state.value.settings = "lightMode";
    },
    changeUserSettingsDark: (state) => {
      state.value.settings = "darkMode";
    },
  },
});

export const {
  changeUserName,
  changeUserSettingsLight,
  changeUserSettingsDark,
} = userSlice.actions;

export default userSlice.reducer;
