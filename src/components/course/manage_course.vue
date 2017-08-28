<template>
  <div class="manage_course">
    <div class="content-view">
      <div style="font-size:40px; padding:1%;">
        {{ msg }}
      </div>
      <md-table v-once >
        <md-table-header>
          <md-table-row class="md-th">
            <md-table-head style="width:10%; text-align:center; font-size:16px;">No</md-table-head>
            <md-table-head style="width:20%; text-align:center; font-size:16px;">Course_name</md-table-head>
            <md-table-head style="width:20%; text-align:center; font-size:16px;">Driving type</md-table-head>            
            <md-table-head style="width:20%; text-align:center; font-size:16px;">Price</md-table-head>
            <md-table-head style="width:20%; text-align:center; font-size:16px;">course_start</md-table-head>
            <md-table-head style="width:10%; text-align:center; font-size:16px;">Delete</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="crs in course_lists" v-bind:key="crs.no" style="cursor:pointer;" @click.native="getData(crs)">
            <md-table-cell style="font-size:16px;">{{ crs.no }}</md-table-cell>
            <md-table-cell style="text-align:left; padding-left:1.5%; font-size:16px;">{{ crs.course_name }}</md-table-cell>
            <md-table-cell style="text-align:left; padding-left:1.5%; font-size:16px;">{{ getTypeCourse(crs.course_type) }}</md-table-cell>
            <md-table-cell style="text-align:right; padding-left:1.5%; font-size:16px;">{{ getMoneyFormat(crs.price) }}</md-table-cell>
            <md-table-cell style="font-size:16px;"> 
              {{ getDate(crs.date_start)}}
            </md-table-cell>
            <md-table-cell style="text-align:center;">
                <md-icon class="md-accent" style="font-size:35px; cursor:pointer;">delete_forever</md-icon>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </div>

    <md-button class="md-fab md-fab-bottom-right" style="position: fixed;">
      <md-icon>add</md-icon>
    </md-button>

  </div>
</template>

<script type="text/javascript" src="../../js/courses/manage_course.js"></script>