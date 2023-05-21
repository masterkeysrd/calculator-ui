<template>
  <v-container>
    <h2>Calculator</h2>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field label="Input 1" type="number"></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field label="Input 2" type="number"></v-text-field>
        </v-col>
        <v-col cols="12">
          <div class="d-flex justify-space-between">
            <v-btn size="large" color="primary">&plus;</v-btn>
            <v-btn size="large" color="primary">&minus;</v-btn>
            <v-btn size="large" color="primary">&lowast;</v-btn>
            <v-btn size="large" color="primary">&divide;</v-btn>
            <v-btn size="large" color="primary">&radic;</v-btn>
          </div>
        </v-col>
        <v-col>
          <v-btn size="large" color="primary" class="w-100"
            >Random String</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
