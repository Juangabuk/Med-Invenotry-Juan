<template>
    <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 class="text-xl font-bold mb-6">Register</h1>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" v-model="email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" v-model="password" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input type="password" v-model="confirmPassword" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Register</button>
            <router-link to="/login" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Back to login</router-link>

          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegisterForm",
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: ""
      };
    },
    methods: {
      register() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        alert(`Registration attempt with email: ${this.email}`);
        // Perform registration logic
      }
    }
  }
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  