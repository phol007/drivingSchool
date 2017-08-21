<template>
  <div class="manage_em_tec">
    <div class="content-view">
      <div style="font-size:40px; padding:1%;">
        {{ msg }}
      </div>
      <md-table v-once >
        <md-table-header>
          <md-table-row class="md-th">
            <md-table-head style="width:10%; text-align:center; font-size:16px;">No</md-table-head>
            <md-table-head style="width:20%; text-align:center; font-size:16px;">Username</md-table-head>
            <md-table-head style="width:30%; text-align:center; font-size:16px;">Fristname - Lastname</md-table-head>
            <md-table-head style="width:30%; text-align:center; font-size:16px;">Roleuser</md-table-head>
            <md-table-head style="width:10%; text-align:center; font-size:16px;">Delete</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="user in user_lists" v-bind:key="user.no" style="cursor:pointer;" v-model="MDuser">
            <md-table-cell style="font-size:16px;">{{ user.no }}</md-table-cell>
            <md-table-cell style="text-align:left; padding-left:1.5%; font-size:16px;">{{ user.username }}</md-table-cell>
            <md-table-cell style="text-align:left; padding-left:1.5%; font-size:16px;">{{ user.fname }}&nbsp;&nbsp;{{ user.lname }}</md-table-cell>
            <md-table-cell style="font-size:16px;"> 
              <select id="RoleUser" v-bind="RoleUser" class="ui fluid dropdown" @change="changeRole(user.id)">
                <option v-for="Role in Roles" v-bind:value="Role.Role_id" :selected="Role.Role_id == user.Roleuser ? 'selected' : ''" >
                  {{ Role.Role_name }}
                </option>
              </select>
            </md-table-cell>
            <md-table-cell style="text-align:center;">
                <md-icon class="md-accent" style="font-size:35px; cursor:pointer;">delete_forever</md-icon>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </div>
    <md-speed-dial class="md-fab-bottom-right">
      <md-button class="md-fab">
        <md-icon class="md-size-2x">add</md-icon>
      </md-button>

     <!-- <md-button class="md-fab md-mini md-clean">
        <md-icon>email</md-icon>
      </md-button> -->

    </md-speed-dial>
  </div>
</template>

<script type="text/javascript" src="../../js/users/manage_em_tec.js"></script>