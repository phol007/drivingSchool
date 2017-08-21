<template>
	<div class="calendar">
		<div class="content-view">
			<h1 class="title"> {{ msg }}</h1>
			<div class="chart">
				<h2>รายงานรายรับ - รายจ่าย</h2>
				<img src="../../assets/test_chart.jpg" style="width: 70%;">
				<p><button class="ui button green "> พิมพ์รายงาน </button></p>
			</div>
			<div class="chart">
				<h2>รายงานข้อมูลสมาชิก</h2>
				<img src="../../assets/test_chart.jpg" style="width: 70%;">
				<p><button class="ui button green "> พิมพ์รายงาน </button></p>
			</div>
			<div class="chart">
				<h2>รายงานข้อมูลการใช้งานรถ</h2>
				<img src="../../assets/test_chart.jpg" style="width: 70%;">
				<p><button class="ui button green "> พิมพ์รายงาน </button></p>
			</div>
			<div class="chart">
				<h2>รายงานข้อมูลผู้ใช้งาน</h2>
				<img src="../../assets/test_chart.jpg" style="width: 70%;">
				<p><button class="ui button green "> พิมพ์รายงาน </button></p>
			</div>
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

<script src="../../js/static/mn_static.js"></script>