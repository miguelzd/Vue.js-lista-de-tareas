<p  align="center">
<img  src="http://l3000446.ferozo.com/github/demo-app-vue-tareas/vuejs-min.jpg"  alt="Logo-Vue-JS">
</p>

  
# Lista de tareas  
### Vue.js 2.0 

Sencilla aplicación que agrega tareas a una lista de objetos y que permite marcar y desmarcar como completadas. 

## Links de referencias

 - https://vuejs.org/
 - https://github.com/vuejs/vue
 - https://fontawesome.com/?from=io
 - https://getbootstrap.com/docs/4.1/getting-started/introduction/
  



## script.js

```
new Vue({
	el: '#appVue',
	data: {
		lists: [],
		newKeep: ''
		},
		methods: {
			addKeep:  function(){
			this.lists.push({keep:  this.newKeep, completed:  false});
			this.newKeep  =  '';
		}
	}
});
```
 

## Screenshots

  
#### Index
<img  src="http://l3000446.ferozo.com/github/demo-app-vue-tareas/cap-1-min.png"  width="100%">


<div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img  src="http://l3000446.ferozo.com/github/demo-app-vue-tareas/cap-2-min.png"  width="100%">
</div>

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2013-present, Yuxi (Evan) You