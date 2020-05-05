Ext.define('ExtJS.controller.MyApplicationController',{
	extend:'Ext.app.Controller',
	alias:'controller.mycontroller',
	views:['practice.MyApplicationPanel','practice.MyApplicationPersonalDetails','practice.MyApplicationTabPanel','MainView','practice.RegisterFormPanel','treeGrid.treeGrid'],
	stores:['PersonStore','TreeTabStore'],
	init: function(){
		this.control({
			'#submitBtn': {
				click: this.onLogin
			},
		
			'#saveBtn': {
				click: this.onSave
			},
			
			'#registerBtn': {
				click: this.onRegister
			},
			'#signInBtn' : {
				click:this.onSignIn
			}
			
		});
		
	
	},
	
	onLogin: function(button){
		//alert('Submit clicked')
		var loginform = button.up('myPanel');
		var loginformValues = loginform.getForm().getValues();
		alert (JSON.stringify(loginformValues));
		var mainview = loginform.up('mainview');
		mainview.removeAll();
		console.log("Panel removed");
		
		var panel = Ext.widget('panel',{
			layout:'border',
			width:'98%',
			margin:'10 10 10 10',
			height: 600,
			items:[
			{
				xtype: 'label',
				region: 'north',
				text:'Welcome !! '+loginformValues.UserName,
				width:400,
				height: 20,
				align:'right',
				margin:'5 10 10 5'
			},
			{
				xtype: 'myApp',
				region:'center',
				margin:'10 10 10 10'
			}
			]
		});
		console.log("Panel created");
		//var myApp = Ext.widget('myApp');
		mainview.add(panel);
		
	},
	
	onSave: function(button){
		
		var saveForm = button.up('form');
		var formValues = saveForm.getForm().getValues();
		alert(JSON.stringify(formValues));
		var store = saveForm.up('personal_details').down('grid').getStore();
		var record = store.findRecord('name', formValues.name);
		if (record == null)
			store.add(formValues);
		else{
			record.set('age',formValues.age);
			record.set('gender', formValues.gender);
		}
	},
	
	onRegister: function(button){
		alert("Register button has been clicked!!!!!!");
		var loginform = button.up('myPanel');
		var mainview = loginform.up('mainview');
		mainview.removeAll();
		var myForm = Ext.widget('registerPanel');
		mainview.add(myForm);
		myForm.center();
		
	},
	onSignIn: function(button){
		var signInForm = button.up('registerPanel'); 
		var signInFormValues = signInForm.getForm().getValues();
		alert(JSON.stringify(signInFormValues));
		var mainview = signInForm.up('mainview');
		mainview.removeAll();
		var myPanel = Ext.widget('myPanel');
		mainview.add(myPanel);
	}
	
})