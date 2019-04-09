<template>
	<v-container gris-list-md v-if="book">
		<v-layout row wrap>
			<v-flex xs12 xs10 offset-sm1>
				<book-details :book="book"></book-details>
			</v-flex>
			<v-flex xs12 xs10 offset-sm1>
				<book-part-list-item></book-part-list-item>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default{
		props:{
			'id':{
				type: String,
				required: true
			}
		},
		computed:{
			book(){
				return this.$store.getters.getBooks.find(b => b.id == this.id)
			}
		}
	}
</script>


<style scoped>
	
</style>