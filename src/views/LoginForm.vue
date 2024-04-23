<!-- <template>
  <div class="registration">
    <div>
      <p
        style="
          margin-top: 110px;
          margin-left: 15%;
          font-size: 20px;
          font-weight: 500;
          color: #212f3d;
          padding-top: 36px;
        "
      >
        For Access Dashbaord
      </p>
    </div>
    <div style="margin-top: 50px">
      <el-form>
        <el-form-item label="username">
          <el-input placeholder="username" v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="password">
          <el-input placeholder="password" v-model="password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <button @click="login()">Log in</button>
    </div>

    <div class="dhac">
    </div>
  </div>
</template> -->

<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 class="text-xl font-bold mb-6">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" v-model="email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" v-model="password" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
          <router-link to="/register" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">REGISTER</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username :"",
      password: ""
    }
  },
  methods : {
    login() {
      if(this.email === 'jontor@mail.com' && this.password === 'tes123') {
        //Success Route - DashBoard
        sessionStorage.setItem("loginSuccess", true);
        this.$router.push({name : 'dashboard'})
      } else {
         this.$notify.error({
          title: 'Error',
          message: 'Invalid Credentials'
        });
      }
    }
  },
  created() {
    sessionStorage.setItem("loginSuccess", false)
  }
};
</script>

<style scoped>
.registration {
  width: 400px;
  height: 490px;
  border-radius: 4px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  margin-left: 222px;
}

.el-form-item__label {
  margin-left: 30px;
}

.el-form-item__content {
  margin-left: 27px;
  width: 72%;
}

button {
  width: 130px;
  height: 40px;
  border-radius: 4px;
  background-color: #3498db;
  border: 2px solid #3498db;
  color: #ffffff;
  font-weight: 500;
  margin-left: 30%;
  cursor: pointer;
}

button:hover {
  background-color: #caccce;
  color: #0f0f0f;
  border: 2px solid #caccce;
  width: 135px;
  height: 44px;
  animation-name: pulse;
  animation-duration: 4s;
}
.dhac {
  margin-left:17%;
  font-size: 14px;
  margin-top:50px;
}

a {
  text-decoration: none;
  color:#3498db;
}
</style>
