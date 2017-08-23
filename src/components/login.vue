<template>
  <div class="login" style="text-align:center;">
    <div class="content-view" id="stLogin">
      <p>
      <img src="../assets/logo.png" height="200" width="200">
       <form class="ui form" method="post" v-on:submit.prevent="login(Username,password)">
        <div class="field">
          <label>Username</label>
          <input type="text" name="Username" v-model="Username" placeholder="Username" required>
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" name="Password" v-model="password" placeholder="Password" required>
        </div>
        <div class="field">
          <div class="ui buttons massive" style="width:100%;">
            <button class="ui button positive" type="submit"><i class="arrow circle right icon"></i>&nbsp;&nbsp;&nbsp;Login</button>
            <div class="or"></div>
            <button class="ui blue button" @click="goTo('/Form_user')">Register <i class="angle double right icon"></i></button>
          </div>
        </div>
      </form>
      </p>
    </div>
  </div>
</template>

<script type="text/javascript" src="../js/login.js"></script>