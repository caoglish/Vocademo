/*Global: Vue v*/
((Vue, window, v) => {
	var app = new Vue({
		el: '#app',
		data: {
			strText: 'hello, world. My Dear Friends',
			position: 2,
			v:v,
			apiList: [
				//Case
				{
					api: 'camelCase',
				}, {
					api: 'capitalize',
				}, {
					api: 'decapitalize',

				}, {
					api: 'kebabCase',

				}, {
					api: 'lowerCase',

				}, {
					api: 'kebabCase',

				}, {
					api: 'snakeCase',

				}, {
					api: 'titleCase',

				}, {
					api: 'upperCase',

				},
				//Chop
				{
					api: 'charAt',
					param: {
						position: 2,
					}
				},  {
					api: 'codePointAt',
					param: {
						position: 2,
					}
				}, {
					api: 'first',
					param: {
						length:2
					}
				}, {
					api: 'graphemeAt',
					param: {
						position: 3,
					}
				}, {
					api: 'last',
					param: {
						length: 3
					}
				}, {
					api: 'prune',
					param: {
						length: 14,
						end: '(more)',
					}
				}, {
					api: 'slice',
					param: {
						start: 1,
						end: 4,
					}
				}, {
					api: 'substr',
					param: {
						start: 1,
						length: 4,
					}
				}, {
					api: 'substring',
					param: {
						start: 1,
						end: 4,
					}
				},
				{
					api: 'truncate',
					param: {
						length: 7,
						end: '(...)',
					}
				},

				//Manipulate
				{
					api: 'insert',
					param: {
						toInsert: 'a',
						position: 1,
					}
				}, {
					api: 'latinise',
				}, {
					api: 'graphemes',
				}, {
					api: 'slugify',
				}, {
					api: 'first',
				}, {
					api: 'last',
				}, {
					api: 'capitalize',
				}
			]

		},
		computed: {


			/*
			 *item{api,parameter,result,ref}
			 */

			result: {
				get: function () {
					let subject = this.strText;

					let apiList = this.apiList;
					console.log(v);
					let resultList = apiList.map((item) => {
						let api = item.api;
						let param = item.param;
						let parameters = [subject];


						if (item.param) {
							for (let k in param) {
								parameters.push(param[k]);
							}
						}
						let result = v[api].apply(null, parameters);
						return {
							api: 'v.' + api,
							param: param,
							result: result,
							ref: '#' + api
						};

					});

					return resultList;
				},
				set: function (newVal) {
					console.log(newVal);
				}
			}
		}
	});

	window.app = app;
})(Vue, window, v);