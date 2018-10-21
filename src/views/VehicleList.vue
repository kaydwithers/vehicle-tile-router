<template>
<div class="VehicleList">
  <div class="vehicle-list">
    <VehicleListItem v-for="vehicle in vehicles" 
      :key="vehicle.id"
      :vehicle="vehicle"
    />
  </div>
</div>
</template>

<script>
import EventService from "@/services/EventService.js";
import VehicleListItem from "@/components/VehicleListItem.vue";

export default {
  name: "VehicleList",
  data() {
    return {
      vehicles: []
    };
  },
  created() {
    EventService.getPayload()
      .then(response => {
        this.vehicles = response.data;
      })
      .catch(error => {
        console.log("There was an error: " + error);
      });
  },
  components: {
    VehicleListItem
  }
};
</script>

<style>
.vehicle-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
