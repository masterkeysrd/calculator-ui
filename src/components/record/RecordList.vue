<template>
  <v-container>
    <div class="mb-5 record-list-search-container">
      <v-text-field
        v-model="search"
        density="comfortable"
        variant="outlined"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
      />
      <span class="text-error" v-if="search !== '' && search.length < 3">
        Search term must be at least 3 characters
      </span>
    </div>
    <v-data-table-server
      :loading="loading"
      :search="pageable.query"
      :page="pageable.page"
      :items-per-page="pageable.size"
      :headers="tableHeaders"
      :items-length="totalCount"
      :items="records"
      item-value="id"
      @update:options="onPageChanged"
    />
  </v-container>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { useListRecords } from "../../services/record.service";
import { debounce } from "../../common/utils/debounce.utils";
import { getSort } from "../../common/utils/sort.uitls";
import { mapRecord } from "../../common/utils/records.utils";
import { tableHeaders } from "../../constants/records.contants";

let initial = true;
const search = ref("");
const pageable = ref({
  query: "",
  page: 1,
  size: 10,
  sort: "",
});

const { result, loading } = useListRecords(pageable);

const records = computed(() => {
  return result.value?.items?.map(mapRecord) || [];
});

const totalCount = computed(() => {
  return result.value?.total_count || 0;
});

const onSearchChange = debounce(() => {
  if (search.value !== "" && search.value.length < 3) {
    return;
  }

  pageable.value = {
    ...pageable.value,
    query: search.value,
  };
}, 500);

watch(search, () => onSearchChange());

const onPageChanged = (event: any) => {
  if (initial) {
    initial = false;
    return;
  }
  pageable.value = {
    query: search.value,
    page: event.page,
    size: event.itemsPerPage,
    sort: event.sortBy.map(getSort).join(","),
  };
};
</script>
