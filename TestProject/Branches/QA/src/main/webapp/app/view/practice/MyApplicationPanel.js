Ext.define('ExtJS.view.practice.MyApplicationPanel',{
	extend: 'Ext.form.Panel',
	xtype: 'myPanel',
	title: 'LoginForm',
	height: 170,
	width: 300,
	//border: true,
	//margin: '20 20 20 20',
	//layout: 'vbox',
	//overflowY : 'auto',
	defaults:{
		margin:'10 0 0 10',
		frame: true
	},
	
	items:[
	{
		xtype: 'textfield',
		allowBlank: false,
		fieldLabel: 'UserName',
		emptyText: 'Enter Username',
		name: 'UserName'
		
	},
	{
		xtype: 'textfield',
		fieldLabel: 'Password',
		allowBlank: false,
		name: 'Password',
		emptyText: 'Enter Password',
		inputType: 'password'
		
	},
	{
		xtype:'checkbox',
        fieldLabel: 'Remember me',
		inputValue: 'YES',
        name: 'remember'
	}
	],
	bbar:[
	'->',
	{
		xtype: 'button',
		text: 'Login',
		itemId: 'submitBtn',
		formBind: true
	},
	{
		xtype: 'button',
		text: 'Register',
		itemId: 'registerBtn',
		//formBind: true
	}
	],
	
});