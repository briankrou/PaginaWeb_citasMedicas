
module.exports = function(app){

  //endpoints

  //endpoint principal
  app.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
  });

 //endpoint nosotros
  app.get("/nosotros", (req, res) => {
    res.render("nosotros", { titulo: "inicio EJS" });
  });

   //endpoint servicios
  app.get("/servicios", (req, res) => {
    res.render("servicios", { titulo: "inicio EJS" });
  });
  //endpoint login
  app.get("/login", (req, res) => {
    res.render("login", { titulo: "inicio EJS" });
  });
  //enponit usuario
  app.get("/usuario", (req, res) => {
    res.render("usuario", { titulo: "inicio EJS" });
  });




}






