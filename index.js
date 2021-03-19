require('dotenv').config();
const { inquirerMenu, pausa, leerInput, listarLugares } = require('./helpers/inquirer');
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
				const termino = await leerInput('Ciudad: ');

				//  Buscar los lugares
				const lugares = await busquedas.ciudad(termino);

				//  Seleccionar el lugar
				const id = await listarLugares(lugares);
				if (id === '0') continue;
				const lugarSelecionado = lugares.find((lugar) => lugar.id === id);

				//	Guardar en DB
				busquedas.agregarHistorial(lugarSelecionado.nombre);

				//  Clima
				const { lat, lng } = lugarSelecionado;
				const clima = await busquedas.climaLugar(lat, lng);

				//  Mostrar resultado
				console.log('\nInformación de la ciudad\n'.cyan);
				console.log('Ciudad: ', lugarSelecionado.nombre.cyan);
				console.log('Lat: ', lugarSelecionado.lat);
				console.log('Lng: ', lugarSelecionado.lng);
				console.log('Temperatura: ', clima.temp);
				console.log('Mínima: ', clima.min);
				console.log('Máxima: ', clima.max);
				console.log('Clima: ', clima.desc.cyan);

				break;

			case 2:
				busquedas.historialCapitalizado.forEach((lugar, index) => {
					const indexReal = `${index + 1}.`.cyan;
					console.log(`${indexReal} ${lugar}`);
				});
				break;

			default:
				break;
		}
		if (opt !== 0) await pausa();
	} while (opt !== 0);
};

main();
