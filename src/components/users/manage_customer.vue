<template>
  <div class="manage_customer">
    <div class="content-view">
      <div style="font-size:40px; padding:1%;">
        {{ msg }}
      </div>
      <p style="text-align:right; cursor:pointer; font-weight:bold;">ผู้ใช้งานใหม่ 10 <span style="color:red;">new</span></p>
      <md-table v-once >
        <md-table-header>
          <md-table-row class="md-th">
            <md-table-head style="width:10%; text-align:center; font-size:16px;">No</md-table-head>
            <md-table-head style="width:20%; text-align:center; font-size:16px;">Username</md-table-head>
            <md-table-head style="width:30%; text-align:center; font-size:16px;">Fristname - Lastname</md-table-head>
            <md-table-head style="width:30%; text-align:center; font-size:16px;">course|success</md-table-head>
            <md-table-head style="width:10%; text-align:center; font-size:16px;">Delete</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="user in user_lists" v-bind:key="user.no" style="cursor:pointer;" v-model="MDuser">
            <md-table-cell style="font-size:16px;">{{ user.no }}</md-table-cell>
            <md-table-cell style="text-align:left; padding-left:1.5%; font-size:16px;">{{ user.username }}</md-table-cell>
            <md-table-cell style="text-align:left; padding-left:1.5%; font-size:16px;">{{ user.fname }}&nbsp;&nbsp;{{ user.lname }}</md-table-cell>
            <md-table-cell style="font-size:16px;"> 
              <span style="color: red;"> {{ user.ch }}</span> | <span style="color: green;">{{ user.cs }}</span>
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

<script type="text/javascript" src="../../js/users/manage_customer.js"></script>