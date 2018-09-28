var busquedaMercadolibre = new Vue({
    el: '#busquedaMercadolibre',
    data: {
        articulos: [],
        Detalles: [], 
        sigla: "",
        confir: ""
    },
   

    methods: {
        buscar: function() {
            
            this.$http.get("https://api.mercadolibre.com/sites/MCO/search?q=".concat(this.sigla)).then(result => {
                this.articulos = result.data;
                this.Detalles = this.articulos.results;          
               //console.log(JSON.stringify(result.data));               
                console.log(this.Detalles);
                this.Aumento = 0;
            }, error => {
                console.error(error);
                
            });
        },

    }
})