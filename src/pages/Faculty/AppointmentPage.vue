<template>
  <q-page
    class="flex column q-pa-lg"
    style="height: 100vh; background-color: #ededed"
  >
    <div
      class="col-6 q-pa-md"
      v-for="(title, index) in tableTitles"
      :key="index"
    >
      <q-table
        separator="cell"
        table-header-class="text-white bg-primary text-bold rounded-borders"
        :rows="index === 0 ? schedAppointmentData : approvalReqData"
        row-key="id"
        :columns="tableColumns"
        :title="title"
        title-class="text-primary text-h5"
        class="full-height rounded-borders my-sticky-header-table"
        @row-click="onRowclick"
        flat
        :virtual-scroll="true"
        :virtual-scroll-sticky-size-start="48"
        :rows-per-page-options="[0]"
      />
    </div>

    <AppointmentDialog
      v-model="showDialog"
      :selected-item="selectedItem"
      :is-approval-request="isApprovalRequest"
      @accept="handleAccept"
      @reject="handleReject"
      @close="showDialog = false"
    />
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { QTableColumn } from 'quasar';
import { MeetingDetails, MeetingStatus } from 'src/components/types';
import AppointmentDialog from 'src/components/appointment/AppointmentDialog.vue';

const tableTitles: string[] = ['Scheduled Appointments', 'Approval Request'];

const tableColumns = ref<QTableColumn[]>([
  {
    name: 'scheduledDate',
    field: 'scheduledDate',
    label: 'DATE',
    align: 'left',
    sortable: true,
  },
  {
    name: 'scheduledTime',
    field: 'scheduledTime',
    label: 'TIME',
    align: 'left',
    sortable: true,
  },
  {
    name: 'name',
    field: 'name',
    label: 'STUDENT NAME',
    align: 'left',
    sortable: true,
  },
  {
    name: 'emailAddress',
    field: 'emailAddress',
    label: 'EMAIL ADDRESS',
    align: 'left',
    sortable: true,
  },
  {
    name: 'yearLevel',
    field: 'yearLevel',
    label: 'YEAR LEVEL',
    align: 'left',
    sortable: true,
  },
  {
    name: 'program',
    field: 'program',
    label: 'PROGRAM',
    align: 'left',
    sortable: true,
  },
]);

const schedAppointmentData = ref<MeetingDetails[]>([
  {
    id: 1,
    name: 'ajohaire',
    emailAddress: 'ajohaire@gmail.com',
    yearLevel: '01',
    program: 'BS CS',
    scheduledDate: '2024-10-27',
    scheduledTime: '09:00',
    requestedDate: '2024-10-25',
    requestedTime: '08:00',
    reason: 'Advising session',
    status: MeetingStatus.ACCEPTED,
    subject: 'CC101',
  },
  {
    id: 2,
    name: 'yjohaire',
    emailAddress: 'yjohaire@gmail.com',
    yearLevel: '02',
    program: 'BS IT',
    scheduledDate: '2024-10-28',
    scheduledTime: '10:00',
    requestedDate: '2024-10-25',
    requestedTime: '09:30',
    reason: 'Consultation',
    status: MeetingStatus.PENDING,
    subject: 'IT102',
  },
  {
    id: 3,
    name: 'zjohaire',
    emailAddress: 'zjohaire@gmail.com',
    yearLevel: '03',
    program: 'BS CS',
    scheduledDate: '2024-10-29',
    scheduledTime: '11:00',
    requestedDate: '2024-10-26',
    requestedTime: '10:30',
    reason: 'Project discussion',
    status: MeetingStatus.REJECTED,
    subject: 'CS301',
  },
  {
    id: 4,
    name: 'ljohaire',
    emailAddress: 'ljohaire@gmail.com',
    yearLevel: '04',
    program: 'BS IT',
    scheduledDate: '2024-10-30',
    scheduledTime: '12:00',
    requestedDate: '2024-10-27',
    requestedTime: '11:00',
    reason: 'Thesis review',
    status: MeetingStatus.ACCEPTED,
    subject: 'IT401',
  },
  {
    id: 5,
    name: 'njohaire',
    emailAddress: 'njohaire@gmail.com',
    yearLevel: '01',
    program: 'BS CS',
    scheduledDate: '2024-11-01',
    scheduledTime: '13:00',
    requestedDate: '2024-10-28',
    requestedTime: '12:30',
    reason: 'General inquiry',
    status: MeetingStatus.PENDING,
    subject: 'CC101',
  },
  {
    id: 6,
    name: 'pjohaire',
    emailAddress: 'pjohaire@gmail.com',
    yearLevel: '02',
    program: 'BS CS',
    scheduledDate: '2024-11-02',
    scheduledTime: '14:00',
    requestedDate: '2024-10-29',
    requestedTime: '13:00',
    reason: 'Lab results discussion',
    status: MeetingStatus.ACCEPTED,
    subject: 'CS102',
  },
  {
    id: 7,
    name: 'gjohaire',
    emailAddress: 'gjohaire@gmail.com',
    yearLevel: '03',
    program: 'BS IT',
    scheduledDate: '2024-11-03',
    scheduledTime: '15:00',
    requestedDate: '2024-10-30',
    requestedTime: '14:30',
    reason: 'Mentorship program',
    status: MeetingStatus.REJECTED,
    subject: 'IT203',
  },
  {
    id: 8,
    name: 'sjohaire',
    emailAddress: 'sjohaire@gmail.com',
    yearLevel: '04',
    program: 'BS CS',
    scheduledDate: '2024-11-04',
    scheduledTime: '16:00',
    requestedDate: '2024-10-31',
    requestedTime: '15:00',
    reason: 'Exam preparation',
    status: MeetingStatus.ACCEPTED,
    subject: 'CS403',
  },
  {
    id: 9,
    name: 'qjohaire',
    emailAddress: 'qjohaire@gmail.com',
    yearLevel: '01',
    program: 'BS IT',
    scheduledDate: '2024-11-05',
    scheduledTime: '17:00',
    requestedDate: '2024-11-01',
    requestedTime: '16:30',
    reason: 'Clarification on assignments',
    status: MeetingStatus.PENDING,
    subject: 'IT105',
  },
]);

const approvalReqData = ref<MeetingDetails[]>([
  {
    id: 0,
    name: 'johaire',
    emailAddress: 'emailAddress@gmail.com',
    yearLevel: '01',
    program: 'BS CS',
    scheduledDate: 'today',
    scheduledTime: '12:00',
    requestedDate: '',
    requestedTime: '12:00',
    reason: 'asdas',
    status: MeetingStatus.PENDING,
    subject: 'CCC102',
  },
]);

const selectedItem = ref<MeetingDetails | null>(null);
const showDialog = ref(false);
const isApprovalRequest = computed(() =>
  selectedItem.value
    ? selectedItem.value.status === MeetingStatus.PENDING
    : false
);

function onRowclick(evt: Event, row: MeetingDetails) {
  selectedItem.value = row;
  if (selectedItem.value) showDialog.value = true;
  console.log(selectedItem.value);
  console.log(showDialog.value);
}

function handleAccept() {
  console.log('Accepted:', selectedItem.value);

  if (selectedItem.value == null) return;

  selectedItem.value.status = MeetingStatus.ACCEPTED;

  var index = approvalReqData.value.findIndex(
    (item) => item === selectedItem.value
  );

  if (index !== -1) approvalReqData.value.splice(index, 1);

  schedAppointmentData.value.push(selectedItem.value);
  showDialog.value = false;
}

function handleReject() {
  console.log('Rejected:', selectedItem.value);

  if (selectedItem.value == null) return;

  selectedItem.value.status = MeetingStatus.ACCEPTED;

  var index = approvalReqData.value.findIndex(
    (item) => item === selectedItem.value
  );

  if (index !== -1) approvalReqData.value.splice(index, 1);

  showDialog.value = false;
}
</script>

<style lang="sass">
.my-sticky-header-table
  height: 310px

  thead th // table column such as the date, time, student name, and etc.
    font-size: 18px

  td, th // grid lines
    border: 1px solid rgba(0, 0, 0, 0.03)

  .q-table__top,
  thead
    background-color: #ededed

  tbody tr td // table rows (or the datas)
    font-size: 18px

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
