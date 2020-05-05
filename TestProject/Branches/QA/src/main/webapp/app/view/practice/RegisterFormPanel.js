Ext.define('ExtJS.view.practice.RegisterFormPanel',{
	extend: 'Ext.form.Panel',
	title: 'Sign-in Form',
	xtype: 'registerPanel',
	margin: '150 0 0 600',
	width: 350,
	defaults: {
		margin: '10 10 10 10'
	},
	items:[
	{
		xtype: 'textfield',
		fieldLabel: 'Enter your Name',
		emptyText: 'Enter your name',
		allowBlank: false,
		name: 'Name'
	},
	{
		xtype: 'numberfield',
		fieldLabel: 'Enter your age',
		emptyText: 'Enter your age',
		hideTrigger:true,
		allowBlank: false,
		name: 'Age'
	},
	{
		xtype: 'textfield',
		fieldLabel: 'Email',
		emailText: 'user@example.com', 
		emptyText:'Enter Email',
		vtype: 'email',
		name: 'Email'
	}
	],
	bbar:[
	'->',
	{
		xtype:'button',
		text: 'Register',
		formBind: true,
		itemId:'signInBtn'
	}
	]
});