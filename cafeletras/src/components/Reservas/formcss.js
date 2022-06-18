import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
	borde: "#000000",
	error: "#f08080",
	exito: "#a8ddce"
}

const Formulario = styled.form`
	margin: 0 auto;
	max-width: 800px;
    background-color: rgba(0,0,0,0.6);
    padding: 3rem;
	display: flex;
	flex-direction: column;
	border-radius: 15px;
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	font-size: large;
	padding-top: 15px;
	min-height: 40px;
	cursor: pointer;
	color: var(--crema)

`;

const GrupoInput = styled.div`
	position: relative;
	z-index: 0;
`;

const Input = styled.input`
	width: 80%;
	background: var(--crema);
	border-radius: 5px;
	height: 2rem;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}

	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}

	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;

	${props => props.valido === 'true' && css`
		display: none;
	`}

	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 100px;
	bottom: 8px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}

	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;

const ContenedorTerminos = styled.div`
	grid-column: span 2;

	input {
		margin-right: 10px;
	}

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
	float: right;
	margin-top 2rem;
	height: 45px;
	width: 40%;
	background: var(--cafeclaro);
	color: var(--crema);
	font-weight: bold;
	font-size: large;
	border: 2px solid var(--crema);
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;

	&:hover {
		background-color: var(--verdeclaro);
	}
`;

const MensajeExito = styled.p`
	font-size: 14px;
	color: ${colores.exito};
`;

const MensajeError = styled.div`
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

export {
	Formulario,
	Label,
	GrupoInput,
	Input,
	LeyendaError,
	IconoValidacion,
	ContenedorTerminos,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError
};