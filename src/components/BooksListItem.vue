<template>
	<div>
	<v-card color="secondary" class="white--text">
                	<v-container fluid>
                		<v-layout row>
                			<v-flex xs4 md5 >
                				<v-img :src="book.imageId">
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
		<div class="hidden-sm-and-up">
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
                			<v-flex xs10 md5 >
                				<v-img src="https://i.ytimg.com/vi/SzJ46YA_RaA/maxresdefault.jpg">
                				</v-img>
                			</v-flex>
                			<v-flex xs7 md9>
                				<v-card-title>
                					
                						<div>
                							<strong>{{book.title}}</strong>
                						</div>
                					
                				</v-card-title>
                			</v-flex>
                		</v-layout>
                		<v-layout row>
                			<v-flex xs12>
                						<div>{{book.description}}</div>
                			</v-flex>
                		</v-layout>
                	</v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</div>
</template>



<script>
	export default{
        props:{
		"book":{
			type: Object,
			required: true
		}
	}
}
</script>