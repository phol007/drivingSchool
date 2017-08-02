<template>
  <div class="manage_user">
    <div class="content-view">
      <div style="font-size:40px; padding:1%;">
        {{ msg }}
      </div>
      <p>
      <button class="massive ui button" v-for="MeUser in menu_lists" style="width:200px; height:200px; padding:1%; border:1px solid grey; margin:1.5%;" v-on:click="goTo(MeUser.link)">
        <img :src="MeUser.image" width="70%">
        <hr />
        <p class="md-title" style="color:000;">{{ MeUser.text }}</p>
      </button>
      </p>
    </div>
  </div>
</template>

<script type="text/javascript" src="../../js/manage_user.js"></script>