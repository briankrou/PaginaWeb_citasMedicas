
module.exports = function(app){

      
  app.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
  });
  app.get("/nosotros", (req, res) => {
    res.render("nosotros", { titulo: "inicio EJS" });
  });
  app.get("/servicios", (req, res) => {
    res.render("servicios", { titulo: "inicio EJS" });
  });
  
  app.get("/login", (req, res) => {
    res.render("login", { titulo: "inicio EJS" });
  });
    
}











