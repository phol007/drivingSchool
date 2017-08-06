<template>
	<div class="calendar">
		<div class="content-view">
			<h1 class="title">{{ msg }}</h1>
			<div class="filter">
				<div class="ui form" style="width:25%; margin-left:75%;">
				  	<div class="field" style="text-align:left;">
					    <label>ลักษณะการแสดงผล : </label>
						<select class="ui fluid dropdown">
							<option>วันนี้</option>
							<option>สับดาห์</option>
							<option>ทั้งเดือน</option>
						</select>
					</div>
				</div>
			</div>
			<hr />
			<p  class="train">
				<table>
					<thead>
						<tr>
							<th>No</th>
							<th>Date | Time</th>
							<th>Teacher</th>
							<th>Student</th>
							<th>Location</th>
							<th>Car Type</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style="text-align:center; padding:0;">1</td>
							<td>Monday, 12 Aus 2016 | 10:00 - 12:00 AM</td>
							<td>Teacher. ฤกษณะ  ขับเร็ว</td>
							<td>คุณ มาแรง  แซงเรียบ</td>
							<td>ลัดดาแลน ถ.โชตนาเชียงใหม่ - ฝาง อ.แม่ริม จ.เชียงใหม่</td>
							<td>ยี่ห้อ : Demax <br /> ทะเบียน : กกน 56123 <br /> เกียร์ : ธรรมดา</td>
						</tr>
					</tbody>
				</table>
			</p>
		</div>
	</div>
</template>

<script src="../../js/tableTrain/calendar.js"></script>