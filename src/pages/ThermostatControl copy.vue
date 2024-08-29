<template>
  <q-page class="q-pa-md">
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
              fill-mask="0"
              reverse-fill-mask
              hint="Mask: ##.##"
              input-class="text-right"
              :rules="[ temperature => temperature <= 80 || 'Desired temperature cannot exceed 80 °C']"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="left">
        <q-btn flat label="Set temperature" color="primary" @click="saveTemperature" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const temperature = ref(70);

function saveTemperature() {
  console.log("Temperature saved:", temperature.value);
  // Implement the save functionality here, e.g., sending data to a server
}
</script>
