
<script setup>
import { ref ,onMounted} from 'vue';

       const name =  ref('jhon doe ');
       const status = ref('pandding' );
       const tasks = ref(['task one', 'task two', 'task three' ]);
       const newTask = ref('');
    const togglestatus = () => {
      if(status.value === 'active'){
        status.value = 'pandding' ; 
      } else if (status.value === 'pandding'){
        status.value = 'active' ;  
      }else {
        status.value = 'active' ; 
      }
    };
    const addTask = () => {
      if(newTask.value.trim() !== ''){
        tasks.value.push(newTask.value.trim());
        newTask.value = '';
      }
    };
    const deleteTask = (index) => {
      tasks.value.splice(index, 1);
    };

  onMounted(async () => {
    console.log('Component mounted. Fetching tasks...');
  try {
  const response = await fetch('https://api.restful-api.dev/objects');

    const data = await response.json();
    tasks.value = data.map(task => task.title);
    
  } catch (error) { 
    console.error ('Error fetching tasks:');
    
  }
});
</script>


<template>
    <h1>{{ name }}
      </h1>
      <p v-if="status ==='active' "> user is active</p>
      <p v-else-if="status === 'pandding'">user is pandding</p>
      <p v-else> user is not active</p>

<form @submit.prevent="addTask">

<label for="newTask"> add task</label>
<input type="text" name="newTask" id="newTask" v-model="newTask" />
<button type="submit">submit </button>
</form>

      <ul>
        <li v-for="(task ,index) in tasks" :key="task">
        <span> {{ task }}</span>
        <button @click="deleteTask(index)">x</button>
         
        </li>
      </ul>

     
<br>

      <button v-on:click="togglestatus">change status </button>

</template>
