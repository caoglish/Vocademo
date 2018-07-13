/*Global: Vue*/
((Vue, window)=>{
	var app=new Vue({
		el:'#app',
		data:{
			strText:null
		}
	});

	window.app=app;
})(Vue,window);