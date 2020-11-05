<template>
  <div><money v-model="price" v-bind="money"></money> {{ price }}</div>
</template>
 
<script>
import { Money } from "v-money";

export default {
  components: { Money },

  data() {
    return {
      price: 123.45,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: " #",
        precision: 2,
        masked: false,
      },
    };
  },
};
</script> 
