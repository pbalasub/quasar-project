<template>
  <q-page padding>
    <TodoTask :tasks="tasks"></TodoTask>
  </q-page>
</template>

<script>
import TodoTask from '../components/TodoTask.vue'

export default ({
  name: 'IndexPage',
  data() {
    return {
      tasks: [
        {
          id: 10,
          name: 'Go to Sleep',
          dueDate: '2023/2/28',
          dueTime: '18:30',
          completed: false
        },
        {
          id: 20,
          name: 'Get bananas',
          dueDate: '2023/3/30',
          dueTime: '12:30',
          completed: false
        },
        {
          id: 30,
          name: 'Get Apples',
          dueDate: '2023/3/28',
          dueTime: '10:30',
          completed: false
        },
      ]
    }
  },
  components: {
    TodoTask
  }
})
</script>
