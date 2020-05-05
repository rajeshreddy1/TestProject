Ext.define('ExtJS.store.treeGrid.TreeTabStore',{
	extend:'Ext.data.TreeStore',
	Title: 'Family Tree',
	root: {
		expanded: true,
		children: [
		{	text: 'Family1',
			children:[{
				text: 'Child1',
				age: 10, 
				gender: 'male', 
				isChk: true, 
				leaf: true
			}]
		},
		{
			text: 'Family2',
			children:[{
				text: 'Child2',
				age: 12, 
				gender: 'female',  
				leaf: true
			}]
		},
		{
			text: 'Family3',
			children:[{
				text: 'Child3',
				age: 14,
				gender: 'male',
				leaf: true
			}]
		}
		
		]
	}
});