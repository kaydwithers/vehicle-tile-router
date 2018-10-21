<template>
<router-link class="vehicle-list__item"
  :to="nextRoute.route"
>
  <!--
    :to="{ name: 'ModelComparison', params: { vehiclename: vehicle.name } }"
  -->
  <h4 v-text="vehicle.name"></h4>
</router-link>
</template>

<script>
export default {
  name: "VehicleListItem",
  data() {
    return {};
  },
  props: {
    vehicle: Object,
    vehiclename: String
  },
  computed: {
    comparisonURL() {
      return {
        name: "ModelComparison",
        params: {
          vehiclename: this.vehicle.name
          //comparisonIds: this.vehicle.hashedComparisonIds
        }
      };
    },
    coloradoList() {
      return {
        name: "VehicleListColorado"
      };
    },
    nextRoute() {
      return {
        route:
          this.vehicle.name === "BMW" ? this.coloradoList : this.comparisonURL
      };
    }
  }
};
</script>

<style scoped>
.vehicle-list__item {
  border: 1px solid black;
  padding: 20px;
  width: 25%;
}
</style>
