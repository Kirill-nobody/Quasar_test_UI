<template>
  <q-page class="q-pa-md row items-start q-gutter-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Thermostat Control</div>
        <div class="text-subtitle1">Adjust your home's temperature</div>
      </q-card-section>

      <q-card-section>
        <div class="q-pa-md" style="max-width: 300px">
          <div class="q-gutter-md">
            <q-input
              filled
              v-model.number="temperature"
              label="Enter desired temperature (°C)"
              mask="#.##"
              reverse-fill-mask
              hint="Mask: ##.##"
              input-class="text-right"
              :rules="[
                (temperature) =>
                  temperature <= 80 ||
                  'Desired temperature cannot exceed 80 °C',
              ]"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn label="Set temperature" color="primary" @click="formJson" />
      </q-card-actions>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Air Temperature</div>
        <q-btn color="primary" @click="fetchAirTemperature">Refresh</q-btn>
      </q-card-section>
      <q-card-section>
        <div class="text-body1">
          Current Air Temperature: {{ airTemperature }} °C
        </div>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Input water heate temperature</div>
        <q-btn color="primary" @click="fetchWaterTemperature">Refresh</q-btn>
      </q-card-section>
      <q-card-section>
        <div class="text-body1">
          Current input water heate temperature: {{ waterTemperature }} °C
        </div>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Output water heate temperature</div>
        <q-btn color="primary" @click="fetchWaterTemperature">Refresh</q-btn>
      </q-card-section>
      <q-card-section>
        <div class="text-body1">
          Output water heate temperature: {{ waterTemperature }} °C
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { send } from "pages/apiService"; // Import the sendTemperature function from apiService.js

export default {
  data() {
    return {
      temperature: null, // Corrected spelling
      jsonOutput: null,
    };
  },
  methods: {
    formJson() {
      const data = {
        temperature: this.temperature, // Corrected spelling
      };

      // Convert the object to a JSON string
      this.jsonOutput = JSON.stringify(data, null, 2);
      console.log(this.jsonOutput);

      // Send the JSON data to the server
      this.sendJson(data);
    },
    sendJson(data) {
      send(data)
        .then(response => {
          console.log('Success:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
