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
	res.render("pages/home", {
		title: "home",
	});
});

/* 
	______________________ acceder ______________________
*/
router.get("/acceder", (req, res) => {
	res.render("pages/acceder", {
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
router.get("/tablas-tablas", (req, res) => {
	res.render("pages/tablas-tablas", {
		title: "crear tablas",
	});
});

router.get("/campos-tablas", (req, res) => {
	res.render("pages/campos-tablas", {
		title: "manipular campos",
	});
});

/* 
	______________________ datos ______________________
*/
router.get("/insertar-datos", (req, res) => {
	res.render("pages/insertar-datos", {
		title: "insertar datos",
	});
});

router.get("/seleccionar-datos", (req, res) => {
	res.render("pages/seleccionar-datos", {
		title: "seleccionar datos",
	});
});

router.get("/actualizar-datos", (req, res) => {
	res.render("pages/actualizar-datos", {
		title: "actualizar datos",
	});
});

router.get("/eliminar-datos", (req, res) => {
	res.render("pages/eliminar-datos", {
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

/* 
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
