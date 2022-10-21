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
	______________________ acceder ______________________
*/
router.get("/acceso-mysql", (req, res) => {
	res.render("pages/acceso-mysql", {
		title: "acceso a mysql",
	});
});

/* 
	______________________ base de datos ______________________
*/
router.get("/base-datos", (req, res) => {
	res.render("pages/base-datos", {
		title: "crear base-datos",
	});
});

/* 
	______________________ tablas ______________________
*/
router.get("/modelacion-tablas", (req, res) => {
	res.render("pages/modelacion-tablas", {
		title: "modelacion de tablas",
	});
});

router.get("/manipulacion-tablas", (req, res) => {
	res.render("pages/manipulacion-tablas", {
		title: "manipulacion de tablas",
	});
});

/* 
	______________________ crud ______________________
*/
router.get("/insertar-crud", (req, res) => {
	res.render("pages/insertar-crud", {
		title: "insertar datos",
	});
});

router.get("/seleccionar-crud", (req, res) => {
	res.render("pages/seleccionar-crud", {
		title: "seleccionar datos",
	});
});

router.get("/actualizar-crud", (req, res) => {
	res.render("pages/actualizar-crud", {
		title: "actualizar datos",
	});
});

router.get("/eliminar-crud", (req, res) => {
	res.render("pages/eliminar-crud", {
		title: "eliminar datos",
	});
});

/* 
	______________________ consultas ______________________
*/
router.get("/asc-desc-consultas", (req, res) => {
	res.render("pages/asc-desc-consultas", {
		title: "asc-desc consultas",
	});
});

router.get("/comparadores-consultas", (req, res) => {
	res.render("pages/comparadores-consultas", {
		title: "comparadores consultas",
	});
});

router.get("/compuestos-consultas", (req, res) => {
	res.render("pages/compuestos-consultas", {
		title: "compuestos consultas",
	});
});

router.get("/or-and-consultas", (req, res) => {
	res.render("pages/or-and-consultas", {
		title: "or-and consultas",
	});
});

router.get("/like-consultas", (req, res) => {
	res.render("pages/like-consultas", {
		title: "like consultas",
	});
});

router.get("/limit-consultas", (req, res) => {
	res.render("pages/limit-consultas", {
		title: "limit consultas",
	});
});

router.get("/max-min-consultas", (req, res) => {
	res.render("pages/max-min-consultas", {
		title: "max-min consultas",
	});
});

/* 
	______________________ relaciones ______________________
*/
router.get("/uno-uno-relaciones", (req, res) => {
	res.render("pages/uno-uno-relaciones", {
		title: "uno a uno relaciones",
	});
});

router.get("/uno-muchos-relaciones", (req, res) => {
	res.render("pages/uno-muchos-relaciones", {
		title: "uno a muchos relaciones",
	});
});

router.get("/muchos-muchos-relaciones", (req, res) => {
	res.render("pages/muchos-muchos-relaciones", {
		title: "muchos a muchos relaciones",
	});
});

router.get("/llave-foranea-relaciones", (req, res) => {
	res.render("pages/llave-foranea-relaciones", {
		title: "llave-foranea relaciones",
	});
});

/* 
	______________________ normalizar ______________________
*/
router.get("/normalizar-normalizar", (req, res) => {
	res.render("pages/normalizar-normalizar", {
		title: "normalizar",
	});
});

/* 
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
