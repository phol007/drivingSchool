<template>
  <div class="main_menu">
    <div class="content-view">
      <div style="font-size:40px; padding:1%;">
        {{ msg }}
      </div>
      <p>
      <button class="massive ui button" v-for="MeUser in menu_lists" style="width:200px; height:200px; padding:1%; border:1px solid grey; margin:1.5%;" v-on:click="goTo(MeUser.link)">
        <img :src="MeUser.image" width="70%">
        <hr />
        <p class="md-title">{{ MeUser.text }}</p>
      </button>
      </p>
    </div>
  </div>
</template>

<script src="../js/main_menu.js"></script>