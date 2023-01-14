import "./app.css";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

export function App() {
	function handleClickLogin(values) {
		console.log(values);
	}
	const validationLogin = yup.object().shape({
		email: yup
			.string()
			.email("Não é um email válido!")
			.required("Campo obrigatório!"),
		password: yup
			.string()
			.required("Campo obrigatório!")
			.min(8, "Deve contem pelo menos 8 caracteres"),
	});

	/////////////////////////////////////////////////////

	function handleClickRegister(values) {
		console.log(values);
	}
	const validationRegister = yup.object().shape({
		email: yup
			.string()
			.email("Não é um email válido!")
			.required("Campo obrigatório!"),
		password: yup
			.string()
			.required("Campo obrigatório!")
			.min(8, "Deve conter pelo menos 8 caracteres"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "As senhas não são iguais"),
	});

	return (
		<div className="app">
			<div className="login card">
				<h1>Login</h1>
				<Formik
					initialValues={{}}
					onSubmit={handleClickLogin}
					validationSchema={validationLogin}
				>
					<Form className="form">
						<div className="loginFormGroup">
							<Field
								className="formField"
								name="email"
								type="text"
								placeholder="E-mail"
							/>
							<ErrorMessage
								component="span"
								name="email"
								className="formError"
							/>
						</div>
						<div className="loginFormGroup">
							<Field
								className="formField"
								name="password"
								type="password"
								placeholder="Password"
							/>
							<ErrorMessage
								component="span"
								name="password"
								className="formError"
							/>
						</div>

						<button type="submit" className="buttonForm">
							Open
						</button>
					</Form>
				</Formik>
			</div>

			{/* /////////////////////////////////////////////////////////////// */}

			<div className="register card">
				<h1>Register</h1>
				<Formik
					initialValues={{}}
					onSubmit={handleClickRegister}
					validationSchema={validationRegister}
				>
					<Form className="form">
						<div className="loginFormGroup">
							<Field
								className="formField"
								name="email"
								type="text"
								placeholder="E-mail"
							/>
							<ErrorMessage 
								component="span" 
								name="email" 
								className="formError" 
							/>
						</div>
						<div className="loginFormGroup">
							<Field
								className="formField"
								name="password"
								type="password"
								placeholder="Password"
							/>
							<ErrorMessage
								component="span"
								name="password"
								className="formError"
							/>
						</div>
						<div className="loginFormGroup">
							<Field
								className="formField"
								name="confirmPassword"
								type="password"
								placeholder="Password confirmation"
							/>
							<ErrorMessage
								component="span"
								name="confirmPassword"
								className="formError"
							/>
						</div>
						<button type="submit" className="buttonForm">
							Register
						</button>
					</Form>
				</Formik>
			</div>
		</div>
	);
}
