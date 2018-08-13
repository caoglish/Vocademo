/*Global: Vue v _*/
((Vue, window, v, _) => {
	let apiList=window.vocaApiList;
	let app = new Vue({
		el: '#app',
		data: {
			strText: 'hello, world. My Dear Friends',
			position: 2,
			v: v,
			_: _,
			apiFilter: '',
			apiList: apiList
		},
		computed: {
			/*
			 *item{api,parameter,result,ref}
			 */
			result: {
				get: function() {
					let subject = this.strText;
					let apiList = this.apiList;
					if (this.apiFilter !== '') {
						apiList = apiList.filter((v) => v.api.toLowerCase().includes(this.apiFilter.toLowerCase()));
					}

					let resultList = apiList.map((item) => {
						let api = item.api;
						let param = item.param;
						let isError = false;
						let parameters = [subject];
						if (item.param) {
							for (let k in param) {
								parameters.push(param[k]);
							}
						}
						let result;
						try {
							result = v[api].apply(null, parameters);
						} catch (e) {
							result = e.toString();
							isError = true;
						}
						return {
							isErr: isError,
							api: 'v.' + api,
							param: param,
							result: result,
							ref: '#' + api
						};

					});

					return resultList;
				}
			}
		}
	});

	window.app = app;
})(Vue, window, v, _);