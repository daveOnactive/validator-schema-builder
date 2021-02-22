/** @format */

const MainPage = () => {
	return (
		<main>
			<pre>
				<code>
					{`const schema = yup.object().shape({
                              name: yup.string()
                              .required(),
                              age: yup.string()
                              .required(),
                              phone: yup.string()
                              .required(),
                              sex: yup.string()
                              .required(),
})`}
				</code>
			</pre>
		</main>
	);
};

export default MainPage;
