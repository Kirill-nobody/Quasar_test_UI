<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Water heater control </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="left" bordered>
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section> Dashboard </q-item-section>
        </q-item>
        <!-- Add more navigation items here -->
      </q-list>
    </q-drawer>

    <q-page class="q-pa-md">
      <!-- Navigation Buttons -->
      <q-tabs
        v-model="currentTab"
        active-color="primary"
        indicator-color="primary"
      >
        <q-tab name="lights" label="Lights" />
        <q-tab name="thermostat" label="Thermostat" />
        <q-tab name="security" label="Security" />
      </q-tabs>

      <!-- Dynamic component rendering based on selected tab -->
      <div class="q-mt-md">
        <component :is="currentComponent" />
      </div>

      <!-- Page content based on selected function -->
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-page>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          © 2024 Dnipro University of technology
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from "vue-router";
import ThermostatControl from "pages/ThermostatControl.vue";
import FormJsonPage from 'pages/FormJsonPage.vue';

const router = useRouter();

// State to track the current tab
const currentTab = ref("thermostat");

const currentComponent = computed(() => {
  switch (currentTab.value) {
    case "thermostat":
      return ThermostatControl;
    case "JSON":
      return FormJsonPage;
    default:
      return ThermostatControl;
  }
});
</script>
