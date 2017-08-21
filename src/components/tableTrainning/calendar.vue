<template>
	<div class="calendar">
		<div class="content-view">
			<h1 class="title">{{ msg }}</h1>
			<div class="filter">
				<div class="ui form" style="width:25%; margin-left:75%;">
				  	<div class="field" style="text-align:left;">
					    <label>ลักษณะการแสดงผล : </label>
						<select class="ui fluid dropdown" v-model='selectType' @change="getDetail">
							<option v-for="types in select_type" :value="types.id">{{ types.text }}</option>
						</select>
					</div>
				</div>
			</div>
			<hr />
			<p  class="train">
				<table>
					<thead>
						<tr>
							<th width="5%">No</th>
							<th width="15%">Date | Time</th>
							<th width="10%">Teacher</th>
							<th width="10%">Student</th>
							<th width="13%">Location</th>
							<th width="7%">Car Type</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="details in train_detail">
							<td style="text-align:center; padding:0;">{{ details.no }}</td>
							<td>{{ details.date }}</td>
							<td>{{ details.teacher }}</td>
							<td>{{ details.student }}</td>
							<td>{{ details.location }}</td>
							<td>{{ details.car }}</td>
						</tr>
					</tbody>
				</table>
			</p>
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

<script src="../../js/tableTrain/calendar.js"></script>