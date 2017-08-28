<template>
	<div class="form-member" style="text-align:center;">
		<table style="width:95%;" class="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Role</th>
					<th>count</th>
					<th>price</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(data, index) in data_list">
					<td>{{ data.name }}</td>
					<td>
						<select v-model="Role = data.Role"  @change="ChangeData(index, Role , data.qty, data.price, data.Amount)">
							<option v-for="Rl in Roles" :value="Rl.id">{{Rl.name}}</option>
						</select>
					</td>
					<td><input type="text" v-model="data.qty" @change="ChangeData(index, Role , data.qty, data.price, data.Amount)" @click="returnInt(index, data.qty, '')" @blur="returnFormat(index, data.qty, '')"></td>
					<td><input type="text" v-model="data.price" @change="ChangeData(index, Role , data.qty, data.price, data.Amount)" @click="returnInt(index, '', data.price)" @blur="returnFormat(index, '', data.price)"></td>
					<td><input type="text" v-model="data.Amount" readonly></td>
				</tr>
			</tbody>
		</table>	
	</div>
</template>

<script src="../../js/users/form_member.js"></script>