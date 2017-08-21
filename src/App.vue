<template>
  <div id="app">
      <md-toolbar>
        <md-button class="md-icon-button" @click="toggleLeftSidenav" style="padding:0; width:5%; margin-left:0;" v-show="this.$route.path!='/'">          
          <i class="material-icons" style="font-size:40px">reorder</i>
        </md-button>
        <h1 class="md-title" style="width:87.5%; text-align:center; font-size:40px; padding-top:0.5%; font-family:RSU;"><img src="./assets/logo.png" height="40" width="40"> โรงเรียนสอนขับรถ</h1>
        <md-button class="md-icon-button" @click="backTopage" style="width: 5%; float:left;padding:0;" v-show="this.nodePage == 0">          
            <i class="material-icons" style="font-size:40px;">backspace</i>
        </md-button>
      </md-toolbar>
      <div>        
        <router-view></router-view>
      </div>

      <md-sidenav class="md-left" ref="leftSidenav">
        <md-toolbar class="md-medium" style="overflow-x: hidden; overflow-y: hidden;">
          <div class="md-toolbar-container">
          <div class="phone-viewport">
            <md-list class="md-triple-line" style="background:none; ">
              <md-list-item style="margin-top:10%; cursor:pointer;">
                <md-avatar class="md-large">
                  <img src="https://placeimg.com/40/40/people/1" alt="People">
                </md-avatar>
                <div class="md-list-text-container" style="overflow-wrap: break-word; width:200px;">
                  <span style="color:#fff; font-size:18px;">รหัส <span id="user_id"></span> </span>
                  <span style="color:#fff; font-size:16px;"> <span id="username"></span> </span>
                  <hr style="width:95%;">
                  <span style="color:#fff; font-size:12px;">ตำแหน่ง <span id="role_name"></span> </span>
                </div>
              </md-list-item>
            </md-list>
          </div>
          </div>
        </md-toolbar>

        <div class="phone-viewport">
          <md-list>
            <md-list-item class="menu_link" v-for="tool in tools" v-bind:id="tool.active" :key="tool.text" @click="acti(tool.id)">
              <md-icon>{{ tool.icon }}</md-icon> <span>{{ tool.text }}</span>
            </md-list-item>
          </md-list>
        </div>
      </md-sidenav>
    </div>
  </div>
</template>

<script src="./js/app.js">
</script>
