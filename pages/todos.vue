<template>
  <div class="text-center justify-center">
    <h1 class="text-3xl text-pink-500">todos</h1>
    <div>
      <input placeholder=" What needs to be done?" @keyup.enter="addTodo" />
      <ul>
        <li
          v-for="(todo, index) in filterTodos"
          :key="index"
          @click.self="toggle(todo)"
        >
          <span
            :class="{ done: todo.isComplete, hide: isEdit === todo.id }"
            @click.self="toggle(todo)"
            >{{ todo.content }}</span
          >
          <input
            type="text"
            v-if="isEdit === todo.id"
            v-model="content"
            @keydown.enter.stop="edit(todo)"
          />
          <div>
            <span @click.stop="clickEdit(todo)">Edit</span>
            <span @click.stop="deleteTodo(todo)">Delete</span>
          </div>
        </li>
      </ul>
      <div>
        <span @click="clickAll">All({{ total }})</span>
        <span @click="clickProgress">Progress({{ countProgress }})</span>
        <span @click="clickDone">Done({{ countDone }})</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
