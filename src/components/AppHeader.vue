<template>
	<div>
		<v-navigation-drawer  absolute temporary v-model="drawer" class="hidden-md-and-up">
		<v-list>
			<v-list-tile v-for="(item,i) in menuItems" :key="`navdrawer${i}`" :to="item.route">
				<v-list-tile-action>
					<v-icon v-html="item.icon"></v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
						<v-list-tile-title v-text="item.title"></v-list-tile-title>
					</v-list-tile-content>
					<v-btn flat @click.prevent="signout" v-if="isUserAutheticated">
				   <v-icon left>exit_to_app</v-icon>
				   Выйти
				</v-btn>
			</v-list-tile>
		</v-list>
		</v-navigation-drawer>
		<v-toolbar  fixed="false" app color="White">
			<v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<router-link to="/" tag="span" style=" cursor: pointer">
			<v-toolbar-title v-text="'ComputerScience'" style=" font-weight: 900;"></v-toolbar-title>
		</router-link>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn v-for="(item, i) in menuItems" flat :key="`menuItem${i}`" :to="item.route" >
					{{item.title}}
				</v-btn>
				<v-btn flat @click="signout" v-if="isUserAutheticated">
				   <v-icon left>exit_to_app</v-icon>
				   Выйти
				</v-btn>
                 	
			</v-toolbar-items>
		</v-toolbar>
	</div>	
</template>

<script>
import firebase from 'firebase'
	export default{
		data(){
			return{
				drawer: false
			}
		},
		computed:{
			 isUserAutheticated(){
        return this.$store.getters.isUserAutheticated
      },
			menuItems(){
				return this.isUserAutheticated ?
				          [
                       {
                       	icon: 'visibility',
                       	title: 'Темы', 
                       	route: '/Темы'
                       },
                       {
                       	icon: '',
                       	title: 'Смотреть',
                       	route: '/Тестовая'
                       }
				] : [
                         {
                       	icon: 'account_circle',
                       	title: 'Регистрация',
                       	route: '/Регистрация'
                       },
                        {
                       	icon: 'input',
                       	title: 'Войти',
                       	route: '/Войти'
                       }                       
				]
			}
		},
		methods:{
			signout(){
				 this.$confirm('Точно хотете выйти?').then(res => {
					if(res)
						this.$store.dispatch('SIGNOUT')
    			})
			}
		}, 
		 watch:{
      isUserAutheticated(val){
        if(val === false)
          this.$router.push({ name: 'home' })
      }
    }
	}
</script>
<style scoped>
</style>