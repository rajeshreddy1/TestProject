Ext.define('ExtJS.store.revionics.RevionicsStore', { 

    extend : 'Ext.data.Store', 

    model : 'ExtJS.model.revionics.RevionicsModel', 

    //autoLoad: false, 

    pageSize: 50, 

     

//       proxy: { 

//            type: 'ajax', 

//            timeout: 480000, 

//            api: { 

//                   read : 'admin/getcampaignheaders.action' 

//            }, 

//            reader: { 

//                type: 'json', 

//                root: 'data', 

//                successProperty: 'success' 

//            }, 

//            listeners: {                 

// 

//                exception: function(proxy, response, operation){ 

//                     

//                    var responseJSON = Ext.JSON.decode(response.responseText); 

//                     

//                    Ext.MessageBox.show({ 

//                        title : 'Exception', 

//                        msg: responseJSON.exception, 

//                        icon: Ext.MessageBox.ERROR, 

//                        buttons: Ext.Msg.OK                         

//                    });                     

//                     

//                } 

//                                 

//            } 

//        } 

     

    data:[ 

        {campaignId:1, campaignName:'ABC', companyName: 'XYZ', startDate: '10-10-10', endDate: '11-11-11', campaignType:'A', status:'true', author: 'abc'} 

    ], 

   /* proxy: { 

        type: 'memory', 

        reader: { 

            type: 'json', 

            root: 'items' 

        } 

    }*/ 

}); 