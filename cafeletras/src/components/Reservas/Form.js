import Input from './Inputs';
import './reserva.css'
import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './formcss';
import ModalReserva from './ModalReserva';

const FormReserva = () => {
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [texto, cambiarTexto] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		texto: /^[a-zA-ZÀ-ÿ\s]{1,300}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}


	const onSubmit = (e) => {
		e.preventDefault();

		if(
			nombre.valido === 'true' &&
			texto.valido === 'true' &&
			correo.valido === 'true' &&
			telefono.valido === 'true' 
		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarCorreo({campo: '', valido: null});
			cambiarTelefono({campo: '', valido: null});
			cambiarTexto({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

    const [isOpen, setIsOpen] = useState(false);

	return (
		<main className='contactoform'>
			<Formulario action="" onSubmit={onSubmit}>
				
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre y apellido"
					placeholder=""
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
				
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo electrónico"
					placeholder="ejemplo@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono de contacto"
					placeholder="Fijo o celular"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>

				<Input
					estado={texto}
					cambiarEstado={cambiarTexto}
					tipo="textarea"
					label="Observaciones"
					placeholder="Día de la reserva, actividad de tu interés, número de participantes"
					name="texto"
				/>

				<ContenedorTerminos>
					<Label>
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
						/>
						Deseo recibir correos sobre promociones y noticias
					</Label>
				</ContenedorTerminos>
				
				<ContenedorBotonCentrado>
					<Boton type="submit" onClick={() => setIsOpen(true)}>
                            
                        {isOpen && <ModalReserva setIsOpen={setIsOpen} />}Enviar</Boton>
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
	);
}
 
export default FormReserva;