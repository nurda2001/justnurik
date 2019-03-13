<template>
	<div class="container">
		<center><h1>Разделение Тем По Информатике</h1></center> 
		<div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
			<div>
		<v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</div>
<div>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(topic,i) in topics"
      :key="i"
    >
      <template v-slot:header>
        <div>{{topic.name}}</div>
      </template>
      <v-card>
        <v-card-text>{{topic.description}}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</div>
	</div>
</div>
</template>

<script>
	export default{
		data () {
      return {
        items: [
          {
            src: 'http://images6.fanpop.com/image/photos/38900000/sge-1-wallpaper-1920x1080-the-school-for-good-and-evil-38924010-1920-1080.jpg'
          },
          {
            src: 'https://evolution-institute.org/new.evolution-institute.org/wp-content/uploads/2018/02/pexels-photo-546819.jpg'
          },
          {
            src: 'https://i.pinimg.com/originals/d8/21/ed/d821ed05984a8ebda0b39c73ead89f8d.png'
          },
          {
            src: 'https://www.stevens.edu/sites/stevens_edu/files/styles/articles_callout_740x480/public/GAN%20Attack-image_0.jpg?itok=rF2D-01p'
          }
        ],
        topics:[
           {
             name: '12 Классы',
             description: 'Еще в разработке'
           },
           {
           	name: '11 Классы',
            description: 'Уже Выпущено'
           },
           {
           	name: '10 Классы',
            description: 'Не имеем понятия'
           },
           {
           	name: '9 Классы',
            description: 'Там всего лишь paint'
           }


        ]

      }
    }
	}
</script>