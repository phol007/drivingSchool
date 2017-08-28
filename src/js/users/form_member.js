import numeral from 'numeral'
export default {
	name: 'form-member',
	data () {
		return {
			Roles: [
					{id: 1, name: 'admin', price: this.formatMoney(1000)}, 
					{id: 2, name: 'owner', price: this.formatMoney(1500)}, 
					{id: 3, name: 'student', price: this.formatMoney(2000)}
					],
	        data_list: [
					{ name: 'yes old', Role: 1, qty: this.formatMoney(1), price: this.formatMoney(0), Amount: this.formatMoney(1000) }, 
					{ name: 'yes old', Role: 2, qty: this.formatMoney(1), price: this.formatMoney(0), Amount: this.formatMoney(1500) }, 
					{ name: 'yes old', Role: 3, qty: this.formatMoney(1), price: this.formatMoney(0), Amount: this.formatMoney(2000) }
					]
			}
	},
	methods: {
		setData () {
			for (var i = 0; i < this.data_list.length; i++) {
				this.data_list[i].Role = this.Roles[i].id
				this.data_list[i].price = this.Roles[i].price
				this.data_list[i].Amount = this.formatMoney(numeral(this.data_list[i].qty).value()*numeral(this.Roles[i].price).value())
			}
		},
		ChangeData (index, Role , qty, price, Amount) {
			 console.log(index+', '+Role+' , '+qty+', '+price+', '+Amount)
			for (var i = 0; i < this.data_list.length; i++) {
				if(i==index){
					this.data_list[i].Role = Role
					this.data_list[i].price = this.formatMoney(price)
					this.data_list[i].qty = this.formatMoney(qty)
					this.data_list[i].Amount = this.formatMoney(numeral(price).value() * numeral(qty).value())
				}
			}
			// console.log(this.data_list)
		},
		formatMoney (int) {
			return numeral(int).format('0,0.00')
		},
		returnInt (index, qty, price) {
			for (var i = 0; i < this.data_list.length; i++) {
				if(i==index){
					if(price!=''){
						this.data_list[i].price = numeral(price).value()						
					}
					if(qty!=''){
						this.data_list[i].qty = numeral(qty).value()						
					}
				}
			}
		},
		returnFormat (index, qty, price) {
			for (var i = 0; i < this.data_list.length; i++) {
				if(i==index){
					if(price!=''){
						this.data_list[i].price = this.formatMoney(price)						
					}
					if(qty!=''){
						this.data_list[i].qty = this.formatMoney(qty)				
					}
				}
			}
		}
	},
	mounted () {
		this.setData()
	}
}