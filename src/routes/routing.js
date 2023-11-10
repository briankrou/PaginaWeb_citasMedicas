
function routung(app){

      
      app.get("/nosotros", (req, res) => {
        res.render("nosotros", { titulo: "Nosotros EJS" });
      });

      
      app.use((req, res, next) => {
        res.status(404).render("404", { titulo: "Página 404" });
      });

      return app;
    
}
module.exports = routung; 