<template>
  <div class="container">
    <div class="row">
      <div class="col-6 col-lg-8 col-md-6 col-12">
        <div>
          <h2>Create a New Todo Item</h2>
          <form>
            <div class="form-group">
              <input
                type="text"
                required
                v-model="newTodo"
                class="form-control"
                placeholder="Todo Item"
              />
            </div>
            <button
              type="button"
              @click="addTodo"
              class="btn btn-info  button bg-primary"
            >
              Create Todo
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="container ">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-12">
          <h2 class="text-center">List Item</h2>
          <div class="col-lg-12">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Todo</th>
                </tr>
              </thead>
              <tbody v-for="(todo, index, id) in todos" :key="index">
                <tr>
                  <td class="text-left">{{ id }}</td>
                  <td class="text-left">
                    {{ todo.todos }}
                  </td>
                  <td class="text-left">
                    <button class="btn btn-danger " @click="removeTodo(index)">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Todos } from "../firebaseConfig";
import axios from "axios";

export default {
  name: "Todo",
  data() {
    return {
      newTodo: "",
      todos: [],

    };
  },

  mounted(){
    axios.get("apiurl")
      .then(response => {
        this.todos = response.data;
      })
      .catch(err => console.log(err, "error"));
  },
  
  updated() {
    axios.get("apiurl")
      .then(response => {
        this.todos = response.data;
      })
      .catch(err => console.log(err, "error"));
  },

  methods: {
    addTodo: function() {
      Todos.push({
        todos: this.newTodo
      });
      this.newTodo = "";
},

    removeTodo: function(key) {
      if (confirm("Do you want to delete this todo?"))
        Todos.child(key).remove();
    }
  }
};

Todos.on("value", function(snapshot) {
  //this.todos = snapshot.val();
  console.log(snapshot.val(), "Snapshot")
});


</script>
