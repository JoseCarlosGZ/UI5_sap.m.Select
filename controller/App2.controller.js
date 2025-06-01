sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("josecarlos.sapui5.controller.App", {
            onInit: function () {

            },
            onChange: function (oEvent) {
                //Retrieve both the inputs controls
                var oInputKey = this.getView().byId("idImputMuestraKey");
                var oInputText = this.getView().byId("idImputMuestraText");
                var oInputEdad = this.getView().byId("idImputMuestraEdad");

                //Retrieve el key que ha sido seleccionado en el Select:
                //var sKeySeleccionado = oEvent.getSource().getSelectedItem().getKey();
                 var sKeySeleccionado =  this.getView().byId("miSelect").getSelectedItem().getKey();
                //insertamos el key seleccionado en el primer Input:
                oInputKey.setValue(sKeySeleccionado);
                
                //Retrieve el text que ha sido seleccionado en el Select:
                var sTextSeleccionado = this.getView().byId("miSelect").getSelectedItem().getText();
                //insertamos el key seleccionado en el primer Input:
                oInputText.setValue(sTextSeleccionado);


                /*Si tenemos el key seleccionado de un determinado registro=item=row de una entidad=tabla y queremos obtener el valor de otra propiedad=columna de ese registro, entonces lo que tenemos qu hacer es recueprar en una variable el modelo, después recuperar el array del modelo que envuelve a todos los registros (eso con getData). Una vez tenemos el array lo recorremos y buscamos el objeto que tiene el key del registro que ha sido seleccionado en el Select y ya solo sería coger la propiedad que queremos. */
                var oModel = this.getView().getModel("alumnos");
                var oData = oModel.getData();
                ///Ya estamos dentro del objeto json que define el modelo (ArchivoAlumnos.json). Ahora tenemos que navegar hasta el array que contiene la entiedad/tabla
                var aData = oData["EntityAlumnos"];



                var sEdad;
                //Recorremos el array de los registros/items, es decir, la tabla/entidad:
                for (var i = 0; i < aData.length; i++) {        
                    if (aData[i].DNI === sKeySeleccionado) {
                        console.log("he encontrado un regsitro cuyo key es igual al seleccionado");
                        sEdad = aData[i].edad;
                        break;
                    }
                }
                //insertamos el key seleccionado en el primer Input:
               // oInputEdad.setValue(sEdad);
               oModel.setProperty("/EdadSeleccionada", sEdad);

            }
        });
    });
