Ext.define('ExtJS.store.PersonStore',{
	extend: 'Ext.data.Store',
	model:'ExtJS.model.PersonModel',
	data:[
	{
		name: 'xyz',
		age: '25',
		gender:'M'
	},
	{
		name: 'abc', age: 10, gender :'F'
	},
	{
		name: '', age: 7, gender: ''
	}
	]
});