<template>
    <v-app>
        <NavBar />
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../layout/NavBar.vue";

export default defineComponent({
    name: "HomeView",
    components: {
        NavBar,
    },
});
</script>