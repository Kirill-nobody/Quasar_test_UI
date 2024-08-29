<template>
  <q-page padding>
    <q-input v-model="name" label="Name" />
    <q-input v-model="age" type="number" label="Age" />

    <q-btn label="Submit" @click="formJson" />

    <div v-if="jsonOutput">
      <h3>JSON Output:</h3>
      <pre>{{ jsonOutput }}</pre>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: null,
      jsonOutput: null,
    }
  },
  methods: {
    formJson() {
      const data = {
        name: this.name,
        age: this.age,
      };

      // Convert the object to a JSON string
      this.jsonOutput = JSON.stringify(data, null, 2);
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
