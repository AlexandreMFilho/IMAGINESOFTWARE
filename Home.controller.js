let that;
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
	"sap/ui/model/Filter"
 ], function (Controller, JSONModel, MessageToast, Filter) {
    "use strict";
    return Controller.extend("MyApp.Home", {
        onInit(){
            that = this;
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/todos',
                method: 'GET',
                dataType: 'json',
                success: this.setList,
                error: function(jqXHR, textStatus, errorThrown) {
                  console.error('Erro:', textStatus, errorThrown);
                }
              });
        },
        setList(data){
            console.log(data);
            that.getView().setModel(new JSONModel(data));
        },

        onFilter(oEvent){
            
        },

        onSearch: function (event) {
            let palavra_chave = event.getParameter("query");
			if (event.getParameter("searchButtonPressed")) {
				MessageToast.show("pesquisado : "+palavra_chave);
                var aFilter = [];
                var sQuery = palavra_chave;
                if (sQuery) {
                    aFilter.push(new Filter("id", that.Contains, sQuery));
                    // that.push(new Filter("title", FilterOperator.Contains, sQuery));
                }
                // filter binding
                var oList = this.byId("invoiceList");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
                setList(aFilter);
			}

		},
       onShowHello : function () {
          MessageToast.show("Hello World");
       }
       ,
    });
 });