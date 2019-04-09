<template>
	<v-container grid-list-md>
		<v-layout row wrap class="hidden-sm-and-down">
			<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
				<v-container fluid>
					<v-layout row>
						<v-flex>
							<v-text-field label="Поиск(Темы или Цели)" v-model="searchTerm"></v-text-field>
					</v-flex>
					</v-layout>
				</v-container>	
			</v-flex>
			</v-layout>
			<v-flex v-for="book in filteredBooks" :key="book.id" xs12 sm10 md8 offset-sm1 offset-md2>
                	<book :book="book"></book>
			</v-flex>
	</v-container>
</template>


<script>
	import book from './BooksListItem'
	import BookPartListItem from './BooksPartListItem'
	export default{
		data(){
			return{
				searchTerm: null
			}
		},
		computed:{
			books(){
				return this.$store.getters.getBooks
			},
			filteredBooks(){
				let books = this.books
				if(this.searchTerm)
					books = books.filter(b => b.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0
						|| b.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0)
				return books
			}
		},
		components:{
			BookPartListItem,
			book
		}
	}

</script>


<style scoped>
	

</style>	