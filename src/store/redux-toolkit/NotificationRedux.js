import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  status: "",
  error: "",
  flag: false,
  bg: "",
};

const notifications = createSlice({
  name: "notifications",
  initialState: initialValues,
  reducers: {
    fetchNotifications(state, action) {
      state.status = action.payload.status;
      state.flag = action.payload.flag;
      state.error = action.payload.error || "";
      state.bg = action.payload.bg || "";
    },
  },
});

export const NotificationActions = notifications.actions;
export default notifications.reducer;
