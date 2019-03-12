<template>
	<div class="container">
		<div class="uk-child-width-1-2@s uk-grid" uk-grid="">
			<div>
			  <v-btn v-for="(item, i) in menuItems" flat :key="`menuItem${i}`" :to="item.route" >
					{{item.title}}
				</v-btn>
		</div>
		<div>
			
		</div>
		</div>
	</div>
</template>

<script>
	export default{
	computed:{
			menuItems(){
				return[
                       {
                       	title: 'Темы', 
                       	route: '/1'
                       },
                         {
                       	title: 'Регистрация',
                       	route: '/2'
                       }
				]
			}
		}
	}
</script>