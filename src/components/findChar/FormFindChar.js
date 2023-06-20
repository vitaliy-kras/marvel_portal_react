import { Field, Form, Formik, ErrorMessage as FormikErrorMessage } from "formik"
import * as Yup from "yup"

const FormFindChar = ({ updateChar }) => {
	
	return (
		<Formik
			initialValues={{
				charName: ""
			}}
			validationSchema={Yup.object({
				charName: Yup.string()
					.min(3, "Ім'я має бути не менше 3 букв")
					.required("Обов'язкове поле")
			})}
			onSubmit={({ charName }) => {
				updateChar(charName)
			}}
		>
			<Form>
				<label className='char__search-label' htmlFor='charName'>
					Або знайдіть персонажа по імені:
				</label>
				<div className='char__search-wrapper'>
					<Field
						id='charName'
						name='charName'
						placeholder="Введіть ім'я"
						type='text'
					/>

					<button type='submit' className='button button__main'>
						<div className='inner'>Знайти</div>
					</button>
				</div>
				<FormikErrorMessage
					component='div'
					className='char__search-error'
					name='charName'
				/>
			</Form>
		</Formik>
	)
}

export default FormFindChar
