import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {

  const [Content, setContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  const submitReview = () => {
    axios.post('http://localhost:3001/posting', {
      title: Content.title,
      content: Content.title
    }).then(() => {
      alert('등록 완료!');
    })
  };

  const getValue = e => {
    const { name, value } = e.target;
    setContent({
      ...Content,
      [name]: value
    })
    console.log(Content);
  };

  return (
    <div className="App">
      <h1>게시판</h1>
      <div className='movie-container'>
        {viewContent.map(el =>
          <div>
            <h2> Title </h2>
            <div> {el.title} </div>
            <h2> Body </h2>
            <div dangerouslySetInnerHTML={{ __html: el.content }}></div>
          </div>
        )}
      </div>
      <div className='form-wrapper'>
        <input className="title-input" type='text' placeholder='제목'
          onChange={getValue} name='title' />
        <CKEditor
          editor={ClassicEditor}
          data="<p></p>"
          onReady={editor => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setContent({
              ...Content,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button
        className="submit-button"
        onClick={submitReview}
      >입력</button>
    </div >
  );
}

export default App;