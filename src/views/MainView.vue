<template>
    <div>
        <NavBar />
        <h1>Home</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptates voluptatem quod
            voluptatibus quos doloribus quas voluptate. Quisquam, quibusdam,
            quia, quae voluptates voluptatem quod voluptatibus quos doloribus
            quas voluptate.
        </p>
    </div>
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