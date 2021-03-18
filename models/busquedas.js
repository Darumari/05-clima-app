class Busquedas {
	historial = ['Tegucigalpa', 'Madrid', 'San José'];
	constructor() {
		//  TODO: Leer DB si existe
	}

	async ciudad(lugar = '') {
		//  Petición HTTP
		console.log(lugar);
		return []; //   Retornar los lugares
	}
}

module.exports = Busquedas;
