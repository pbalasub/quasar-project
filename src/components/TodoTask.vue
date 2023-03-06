<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list separator bordered>
      <q-item-label header>
        <strong>Todo List</strong>
      </q-item-label>
      <q-item v-for="task in tasks" :key="task.id" @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'" clickable v-ripple>
        <q-item section side top>
          <q-checkbox v-model="task.completed" />
        </q-item>
        <q-item-section>
          <q-item-label>{{ task.name }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon size="18px" name="event" class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label class="row justify-end" caption>{{ task.dueDate }}</q-item-label>
              <q-item-label class="row justify-end" caption><small>{{ task.dueTime }}</small></q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ['tasks']
}
</script>
