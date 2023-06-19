import { CKEditor } from '@ckeditor/ckeditor5-react'
import './App.css'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'
function App() {
	const [html, setHTML] = useState('')
	const [showhtml, setShowHTML] = useState(false)

	function handleSave() {
		setShowHTML(true)
	}
	return (
		<>
			<div className='App'>
				<h2>HTML editor</h2>
				<CKEditor
					editor={ClassicEditor}
					data='<p>Write your text here</p>'
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor)
					}}
					onChange={(event, editor) => {
						const data = editor.getData()
						setHTML(data)
						console.log({ event, data })
					}}
				/>
				<button onClick={handleSave}>Save</button>
				<div>{showhtml && html}</div>
			</div>
		</>
	)
}

export default App
