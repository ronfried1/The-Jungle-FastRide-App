import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    pinCode:
      typeof localStorage !== "undefined"
        ? localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY) || ""
        : "",
    selectedRideId: null,
    selectedTickectInfo: {
      ride: {
        zone: {
          name: "test",
          color: "#7373",
        },
        name: "test",
        remaining_tickets: 0,
        return_time: "",
      },
      access_code: "",
      return_time: "",
    },
  },
  reducers: {
    setSelectedRideId(state, action) {
      state.selectedRideId = action.payload.id;
    },
    setPinCode(state, action) {
      localStorage.setItem(
        process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY,
        action.payload.pinCode
      );
      state.pinCode = action.payload.pinCode;
    },
    setBookedTicketDetails(state, action) {
      state.selectedTickectInfo = action.payload.ticketDetails;
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice;
