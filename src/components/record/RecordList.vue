<template>
  <v-container>
    <div class="mb-5" v-if="deleteError">
      <v-alert type="error" closable>
          <div>
            Something went wrong while deleting the record: {{ deleteError }}
          </div>
      </v-alert>
    </div>
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
      :loading="loadingRecords"
      :search="pageable.query"
      :page="pageable.page"
      :items-per-page="pageable.size"
      :headers="tableHeaders"
      :items-length="totalCount"
      :items="records"
      item-value="id"
      @update:options="onPageChanged"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" color="error" @click="onDelete(item.raw)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table-server>

    <confirm-dialog
      v-model="showConfirmDialog"
      @confirm="onDeletedConfirm"
      @cancel="onDeletedCancel"
    />
    <loading-dialog v-model="loadingDelete"></loading-dialog>
  </v-container>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { useListRecords, useDeleteRecord } from "../../services/record.service";
import { debounce } from "../../common/utils/debounce.utils";
import { getSort } from "../../common/utils/sort.uitls";
import { mapRecord } from "../../common/utils/records.utils";
import { tableHeaders } from "../../constants/records.contants";
import ConfirmDialog from "../common/ConfirmDialog.vue";
import LoadingDialog from "../common/LoadingDialog.vue";

let initial = true;
const search = ref("");
const showConfirmDialog = ref(false);
const currentRecordId = ref(0);
const pageable = ref({
  query: "",
  page: 1,
  size: 10,
  sort: "",
});

const { result, loading: loadingRecords, refresh } = useListRecords(pageable);

const {
  loading: loadingDelete,
  error: deleteError,
  deleteRecord,
} = useDeleteRecord();

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

const onDelete = (item: any) => {
  console.log(item);
  currentRecordId.value = item.id;
  showConfirmDialog.value = true;
};

const onDeletedConfirm = async () => {
  showConfirmDialog.value = false;
  await deleteRecord(currentRecordId.value);
  currentRecordId.value = 0;
  refresh();
};

const onDeletedCancel = () => {
  currentRecordId.value = 0;
  showConfirmDialog.value = false;
};
</script>
