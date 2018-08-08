/*Global: Vue v*/
((Vue, window, v, _) => {
	var app = new Vue({
		el: '#app',
		data: {
			strText: 'hello, world. My Dear Friends',
			position: 2,
			v: v,
			_: _,
			apiFilter: "",
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
				}, {
					api: 'codePointAt',
					param: {
						position: 2,
					}
				}, {
					api: 'first',
					param: {
						length: 2
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
				}, {
					api: 'truncate',
					param: {
						length: 7,
						end: '(...)',
					}
				},
				//Count
				{
					api: 'count',

				}, {
					api: 'countGraphemes',

				}, {
					api: 'countSubstrings',
					param: {
						substring: 'boys'
					}

				}, {
					api: 'countWhere',
					param: {
						predicate: function(v) {
							return v === 'l';
						}
					}

				}, {
					api: 'countWords',
					param: {
						pattern: /[^\s]+/g,
						flags: ''
					}

				},
				//escape
				{
					api: 'escapeHtml',


				}, {
					api: 'escapeRegExp',


				}, {
					api: 'unescapeHtml',


				},
				// format
				{
					api: 'sprintf',
					param: {
						replacements: 'good',

					}
				}, {
					api: 'vprintf',
					param: {
						replacements: ['good', 'day'],

					}
				},
				//index
				{
					api: 'indexOf',
					param: {
						search: 'lo',
						fromIndex: 0
					}
				}, {
					api: 'lastIndexOf',
					param: {
						search: 'lo',
						fromIndex: -1
					}
				}, {
					api: 'search',
					param: {
						pattern: /rn/,
						fromIndex: 0
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
					api: 'pad',
					param: {
						length: 40,
						pad: '-',
					}
				}, {
					api: 'padLeft',
					param: {
						length: 40,
						pad: '-',
					}
				}, {
					api: 'padRight',
					param: {
						length: 40,
						pad: '-',
					}
				}, {
					api: 'repeat',
					param: {
						times: 5,

					}
				}, {
					api: 'replace',
					param: {
						pattern: /lo/,
						replacement: '10'
					}
				}, {
					api: 'replaceAll',
					param: {
						pattern: /l/,
						replacement: '*'
					}
				}, {
					api: 'reverse',
				}, {
					api: 'reverseGrapheme',
				}, {
					api: 'slugify',
				}, {
					api: 'splice',
					param: {
						start: 1,
						deleteCount: 3,
						toAdd: 'good bye'
					}
				}, {
					api: 'tr',
					param: {
						from: 'el',
						to: 'ip'
					}
				}, {
					api: 'trim',
					param: {
						whitespace: '-',

					}
				}, {
					api: 'trimLeft',
					param: {
						whitespace: '-',

					}
				}, {
					api: 'trimRight',
					param: {
						whitespace: '-',

					}
				}, {
					api: 'wordWrap',
					param: {
						options: {
							width: 5,
							newLine: '<br/>',
							indent: '  '
						},

					}
				},
				//Query
				{
					api: 'endsWith',
					param: {
						end: 'lo',
						position: 5,
					}
				}, {
					api: 'includes',
					param: {
						search: 'o',
						position: 5,
					}
				},{
					api: 'isAlpha',
				}, {
					api: 'isAlphaDigit',
				}, {
					api: 'isAlphaDigit',
				}, {
					api: 'isBlank',
				}, {
					api: 'isDigit',
				}, {
					api: 'isEmpty',
				}, {
					api: 'isLowerCase',
				}, {
					api: 'isNumeric',
				}, {
					api: 'isString',
				}, {
					api: 'isUpperCase',
				},
				{
					api: 'matches',
					param: {
						pattern: /[^\s]+/g,
						flags: null,

					}
				},{
					api: 'startsWith',
					param: {
						end: 'lo',
						position: 5,
					}
				}, 
				//Split
				{
					api: 'chars',
				}, {
					api: 'codePoints',
				}, {
					api: 'graphemes',
				}, {
					api: 'split',
					param: {
						separator: ',',
						limit: 3,

					}
				}, {
					api: 'words',
					param: {
						pattern: /[^\s]+/g,
						flags: null,

					}
				},
				//Strip
				{
					api: 'stripBom',
				}, {
					api: 'stripTags',
					param: {
						allowableTags: '<div>',
						replacement: '-',

					}
				}
			]

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

						apiList = apiList.filter((v) => v.api.includes(this.apiFilter));
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
				},
				set: function(newVal) {
					console.log(newVal);
				}
			}
		}
	});

	window.app = app;
})(Vue, window, v, _);