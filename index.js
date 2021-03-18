const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

console.clear();
const main = async () => {
	const busquedas = new Busquedas();
	let opt = 0;

	do {
		opt = await inquirerMenu();
		switch (opt) {
			case 1:
				//  Mostrar mensaje
				const lugar = await leerInput('Ciudad: ');
				console.log(lugar);
				//  Buscar los lugares
				//  Seleccionar el lugar
				//  Clima
				//  Mostrar resultado
				console.log('\nInformación de la ciudad\n');
				console.log('Ciudad: ');
				console.log('Lat: ');
				console.log('Lng: ');
				console.log('Temperatura: ');
				console.log('Mínima: ');
				console.log('Máxima: ');

				break;

			case 2:
				console.log('Historial\n');
				break;

			default:
				break;
		}
		if (opt !== 0) await pausa();
	} while (opt !== 0);
};

main();
