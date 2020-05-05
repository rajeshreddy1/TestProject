Ext.define('ExtJS.view.revionics.RevionicsTabPanel',{
	extend: 'Ext.tab.Panel',
	title: 'Revionics',
	xtype: 'revionics',
	items:[{ 

        xtype: 'revionicsGrid', 

        title: 'Campaign Header' 

    } 

        ,{ 

        xtype:'revionicsCampaignEventGrid', 

        title:'Campaign Events' 

    } 

    ] 

});