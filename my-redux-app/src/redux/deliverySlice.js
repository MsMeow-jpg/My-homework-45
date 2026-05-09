import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyName: "Planet Express-ish Delivery",
  shipName: "Cosmic Rustbucket 3000",
  captain: "Captain Nibbly",
  shipStatus: "Waiting for a questionable mission",
  selectedDeliveryId: 1,
  completedCount: 0,
  deliveries: [
    {
      id: 1,
      planet: "Mars",
      packageName: "Emergency Space Pizza",
      receiver: "Red Planet University",
      dangerLevel: "Medium",
      status: "Preparing",
    },
    {
      id: 2,
      planet: "Neptune",
      packageName: "Frozen Slush Machine",
      receiver: "Neptune Snow Bar",
      dangerLevel: "Low",
      status: "In transit",
    },
    {
      id: 3,
      planet: "Omicron Persei 8",
      packageName: "Suspicious Glowing Box",
      receiver: "Angry Alien Monarch",
      dangerLevel: "Extreme",
      status: "Delayed",
    },
    {
      id: 4,
      planet: "Moon Base",
      packageName: "Crater Donuts",
      receiver: "Lunar Snack Office",
      dangerLevel: "Low",
      status: "Delivered",
    },
  ],
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    selectDelivery: (state, action) => {
      state.selectedDeliveryId = action.payload;
    },
    markAsDelivered: (state, action) => {
      const delivery = state.deliveries.find(
        (item) => item.id === action.payload
      );

      if (delivery && delivery.status !== "Delivered") {
        delivery.status = "Delivered";
        state.completedCount += 1;
        state.shipStatus = `Package delivered to ${delivery.planet}. Somehow, nobody exploded.`;
      }
    },
    launchShip: (state) => {
      state.shipStatus = "Ship launched. Seatbelts are optional but screaming is not.";
    },
    cancelMission: (state) => {
      state.shipStatus = "Mission cancelled. The crew voted for snacks instead.";
    },
    resetDeliveries: (state) => {
      state.deliveries = initialState.deliveries;
      state.selectedDeliveryId = initialState.selectedDeliveryId;
      state.completedCount = 0;
      state.shipStatus = initialState.shipStatus;
    },
  },
});

export const {
  selectDelivery,
  markAsDelivered,
  launchShip,
  cancelMission,
  resetDeliveries,
} = deliverySlice.actions;

export default deliverySlice.reducer;