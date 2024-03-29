/* 
	router: almacena el requerimiento de express().Router
*/
let router = require("express").Router();

/* 
	haciendo uso del metodo get(), definimos el endpoint 
	de acceso seguido de una funcion de flecha que captura
	el requermiento del usuario y retorna una respuesta
*/
router.get("/", (req, res) => {
    /* 
		con el metodo render() definimos que vista va a
		renderizarse una vez el usuarrio haga un requerimiento
		a este enpoint, finalmente por medio de un objeto 
		pasamos el nombre de la vista
	*/
    res.render("pages/index", {
        title: "home",
    });
});

/* 
	______________________ inicio ______________________
*/
router.get("/inicio", (req, res) => {
    res.render("pages/inicio", {
        title: "inicio",
    });
});

/* 
	______________________ base de datos ______________________
*/
router.get("/base-datos-manipulacion", (req, res) => {
    res.render("pages/base-datos-manipulacion", {
        title: "base de datos manipulacion",
    });
});

router.get("/base-datos-exportar", (req, res) => {
    res.render("pages/base-datos-exportar", {
        title: "base de datos exportar",
    });
});

router.get("/base-datos-importar", (req, res) => {
    res.render("pages/base-datos-importar", {
        title: "base de datos importar",
    });
});

router.get("/base-datos-cargar-datos", (req, res) => {
    res.render("pages/base-datos-cargar-datos", {
        title: "base de datos cargar datos",
    });
});

/* 
	______________________ tablas ______________________
*/
router.get("/tablas-tipo-datos", (req, res) => {
    res.render("pages/tablas-tipo-datos", {
        title: "tablas tipos de datos",
    });
});

router.get("/tablas-modelacion", (req, res) => {
    res.render("pages/tablas-modelacion", {
        title: "tablas modelacion",
    });
});

router.get("/tablas-manipulacion", (req, res) => {
    res.render("pages/tablas-manipulacion", {
        title: "tablas manipulacion",
    });
});

/* 
	______________________ sentencias ______________________
*/
router.get("/sentencias-insert", (req, res) => {
    res.render("pages/sentencias-insert", {
        title: "sentencia insert",
    });
});

router.get("/sentencias-select", (req, res) => {
    res.render("pages/sentencias-select", {
        title: "sentencia select",
    });
});

router.get("/sentencias-update", (req, res) => {
    res.render("pages/sentencias-update", {
        title: "sentencia update",
    });
});

router.get("/sentencias-delete", (req, res) => {
    res.render("pages/sentencias-delete", {
        title: "sentencia delete",
    });
});

/* 
	______________________ consultas ______________________
*/
router.get("/consultas-order-by", (req, res) => {
    res.render("pages/consultas-order-by", {
        title: "consultas order-by",
    });
});

router.get("/consultas-group-by", (req, res) => {
    res.render("pages/consultas-group-by", {
        title: "consultas group-by",
    });
});

router.get("/consultas-operadores", (req, res) => {
    res.render("pages/consultas-operadores", {
        title: "consultas operadores",
    });
});

router.get("/consultas-and-or", (req, res) => {
    res.render("pages/consultas-and-or", {
        title: "consultas and-or",
    });
});

router.get("/consultas-between", (req, res) => {
    res.render("pages/consultas-between", {
        title: "consultas between",
    });
});

router.get("/consultas-in", (req, res) => {
    res.render("pages/consultas-in", {
        title: "consultas in",
    });
});

router.get("/consultas-like", (req, res) => {
    res.render("pages/consultas-like", {
        title: "consultas like",
    });
});

router.get("/consultas-limit", (req, res) => {
    res.render("pages/consultas-limit", {
        title: "consultas limit",
    });
});

router.get("/consultas-max-min", (req, res) => {
    res.render("pages/consultas-max-min", {
        title: "consultas max-min",
    });
});

router.get("/consultas-count-sum", (req, res) => {
    res.render("pages/consultas-count-sum", {
        title: "consultas count-sum",
    });
});

/* 
	______________________ inner join ______________________
*/
router.get("/inner-join-foreign-key", (req, res) => {
    res.render("pages/inner-join-foreign-key", {
        title: "inner join foreign key",
    });
});

router.get("/inner-join-consultas", (req, res) => {
    res.render("pages/inner-join-consultas", {
        title: "inner join consultas ",
    });
});

/* 
	______________________ relaciones ______________________
*/
router.get("/relaciones-uno-uno", (req, res) => {
    res.render("pages/relaciones-uno-uno", {
        title: "relaciones uno a uno",
    });
});

router.get("/relaciones-uno-muchos", (req, res) => {
    res.render("pages/relaciones-uno-muchos", {
        title: "relaciones uno a muchos",
    });
});

router.get("/relaciones-muchos-muchos", (req, res) => {
    res.render("pages/relaciones-muchos-muchos", {
        title: "relaciones muchos a muchos",
    });
});

/* 
	______________________ normalizacion ______________________
*/
router.get("/normalizacion", (req, res) => {
    res.render("pages/normalizacion", {
        title: "normalizacion",
    });
});

/* 
	______________________ PHP MyAdmin ______________________
*/
router.get("/phpmyadmin-exportar", (req, res) => {
    res.render("pages/phpmyadmin-exportar", {
        title: "phpMyAdmin exportar datos",
    });
});

router.get("/phpmyadmin-importar", (req, res) => {
    res.render("pages/phpmyadmin-importar", {
        title: "phpMyAdmin importar datos",
    });
});

/* 
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
