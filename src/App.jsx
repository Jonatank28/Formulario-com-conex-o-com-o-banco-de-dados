import * as yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";

export function App() {

	function handleClickLogin(values){
		console.log(values)
	}

	return(
		<div>
			<h1>Formulário e banco Mysql</h1>
			<Formik 
				initialValues={{}}
				onSubmit={handleClickLogin}
			>
				<Form>
					<div className='loginFormGroup'>
						<Field
							name ="nome"
							type="text"
							placeholder="Nome"
						/>
						<ErrorMessage 
							component="span"
							name="nome"
							className="classError"
						/>
					</div>
					<div className='loginFormGroup'>
						<Field
							name ="email"
							type="text"
							placeholder="E-mail"
						/>
						<ErrorMessage 
							component="span"
							name="email"
							className="classError"
						/>
					</div>
					<button type='submit'>Enviar</button>
				</Form>
			</Formik>
		</div>
	) 
}


