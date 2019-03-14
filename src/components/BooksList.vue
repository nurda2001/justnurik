<template>
	<v-container grid-list-md>
		<v-layout row wrap>
			<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
				<v-container fluid>
					<v-layout row>
						<v-flex>
							<v-text-field label="Поиск(Темы или Цели)" v-model="searchTerm"></v-text-field>
					</v-flex>
					</v-layout>
				</v-container>	
			</v-flex>
			<v-flex v-for="book in filteredBooks" :key="book.id" xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card color="secondary" class="white--text">
                	<v-container fluid>
                		<v-layout row>
                			<v-flex xs4 md5 >
                				<v-img src="https://i.ytimg.com/vi/SzJ46YA_RaA/maxresdefault.jpg">
                				</v-img>
                				<div class="text-xs-center">
                					<v-btn flat src="https://mail.google.com/mail/u/0/#search/nurlan100000%40mail.ru?projector=1">
                						<v-icon left>visibility</v-icon>
                						Смотреть
                					</v-btn>
                				</div>
                			</v-flex>
                			<v-flex xs10 md9>
                				<v-card-title>
                					<div>
                						<div class="headline">
                							{{book.title}}
                						</div>
                						<div>{{book.description}}</div>
                						<v-divider class="white"></v-divider>
                						<div>Уровень: {{getBookLevel(book.level)}}, {{book.parts}} частей</div>
                					</div>
                				</v-card-title>
                				<v-card-actions>
                					<v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                					<div class="ml-1">
                						<span>{{book.rating}}</span>
                						<span>({{book.ratingsCount}})</span>
                					</div>
                					<v-spacer></v-spacer>
                					<v-btn flat>Открыть</v-btn>
                				</v-card-actions>
                			</v-flex>
                		</v-layout>
                	</v-container>
                </v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<script>
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
		methods:{
			getBookLevel(level){
				return level.join('/')
			}
		}
	}

</script>


<style scoped>
	

</style>	