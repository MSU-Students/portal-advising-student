<template>
  <q-dialog
    value="showDialog"
    @input="$emit('update:showDialog', $event)"
    persistent
  >
    <q-card style="min-width: 350px; max-width: 500px">
      <!-- Header -->
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">
          <q-icon name="calendar_today" size="sm" class="q-mr-sm" />
          Meeting Details
        </div>
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="$emit('close')"
          class="absolute-top-right q-mt-sm"
        />
      </q-card-section>

      <!-- Content -->
      <q-card-section class="q-pt-lg">
        <div v-if="selectedItem" class="q-gutter-y-md">
          <!-- Student Info Section -->
          <div class="text-subtitle2 text-primary q-mb-sm">
            Student Information
          </div>
          <div class="row q-gutter-y-sm">
            <div class="col-12 row items-center">
              <q-icon name="person" size="sm" class="q-mr-sm text-grey-7" />
              <div class="text-subtitle2">{{ selectedItem.name }}</div>
            </div>
            <div class="col-12 row items-center">
              <q-icon name="email" size="sm" class="q-mr-sm text-grey-7" />
              <div>{{ selectedItem.emailAddress }}</div>
            </div>
            <div class="col-12 row q-gutter-x-md">
              <div class="row items-center">
                <q-icon name="school" size="sm" class="q-mr-sm text-grey-7" />
                <div>{{ selectedItem.program }}</div>
              </div>
              <div class="row items-center">
                <q-icon name="grade" size="sm" class="q-mr-sm text-grey-7" />
                <div>Year {{ selectedItem.yearLevel }}</div>
              </div>
            </div>
          </div>

          <!-- Request Info Section -->
          <q-separator />
          <div class="text-subtitle2 text-primary q-mb-sm q-mt-md">
            Request Details
          </div>
          <div class="bg-blue-1 q-pa-sm rounded-borders">
            <div class="row items-center q-gutter-x-md">
              <div class="row items-center">
                <q-icon
                  name="event_available"
                  size="sm"
                  class="q-mr-sm text-grey-7"
                />
                <div>Requested on {{ selectedItem.requestedDate }}</div>
              </div>
              <div class="row items-center">
                <q-icon
                  name="access_time"
                  size="sm"
                  class="q-mr-sm text-grey-7"
                />
                <div>at {{ selectedItem.requestedTime }}</div>
              </div>
            </div>
          </div>

          <q-separator />
          <div class="text-subtitle2 text-primary q-mb-sm q-mt-md">
            Subject or Course
          </div>
          <div class="q-pa-sm bg-grey-2 rounded-borders">
            {{ selectedItem.subject }}
          </div>

          <!-- Scheduled Meeting Section -->
          <q-separator />
          <div class="text-subtitle2 text-primary q-mb-sm q-mt-md">
            Scheduled Meeting
          </div>
          <div class="bg-green-1 q-pa-sm rounded-borders">
            <div class="row items-center q-gutter-x-md">
              <div class="row items-center">
                <q-icon name="event" size="sm" class="q-mr-sm text-grey-7" />
                <div>{{ selectedItem.scheduledDate }}</div>
              </div>
              <div class="row items-center">
                <q-icon name="schedule" size="sm" class="q-mr-sm text-grey-7" />
                <div>{{ selectedItem.scheduledTime }}</div>
              </div>
            </div>
          </div>

          <!-- Reason Section -->
          <q-separator />
          <div class="text-subtitle2 text-primary q-mb-sm q-mt-md">
            Meeting Purpose
          </div>
          <div class="q-pa-sm bg-grey-2 rounded-borders">
            {{ selectedItem.reason }}
          </div>
        </div>
        <div v-else>
          <q-banner class="bg-warning text-white">
            No details available.
          </q-banner>
        </div>
      </q-card-section>

      <!-- Actions -->
      <q-card-actions align="right" class="bg-grey-1" v-if="isApprovalRequest">
        <q-btn
          flat
          label="Reject"
          color="negative"
          @click="$emit('reject')"
          icon="close"
        />
        <q-btn
          flat
          label="Accept"
          color="primary"
          @click="$emit('accept')"
          icon="check"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { MeetingDetails } from '../types';

defineProps<{
  selectedItem: MeetingDetails | null;
  isApprovalRequest: boolean;
}>();
</script>

<style lang="sass">
.my-sticky-header-table
  height: 310px

  .q-table__top
    background-color: $secondary
    padding: 0
    padding-bottom: 12px

.q-card
  border-radius: 8px

  .q-card__section:first-child
    border-top-left-radius: 8px
    border-top-right-radius: 8px
</style>
