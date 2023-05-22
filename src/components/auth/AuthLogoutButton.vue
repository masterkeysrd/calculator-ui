<template>
  <v-btn
    color="secondary"
    size="small"
    variant="elevated"
    class="w-100"
    @click="logout"
  >
    Logout
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLogout } from "../../common/auth/login";

export default defineComponent({
  name: "auth-logout-button",
});
</script>

<script lang="ts" setup>
const logout = useLogout();
</script>
