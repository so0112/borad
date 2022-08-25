import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<DayList />}>
          </Route>

          <Route path="/day/:day" element={<Day />}>
          </Route>

          <Route path="/create_word" element={<CreateWord />}>
          </Route>

          <Route path="/create_day" element={<CreateDay />}>
          </Route>

          <Route path="*" element={<EmptyPage />}>
          </Route>

        </Routes>


        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <div className='movie-container'>
          <h2>제목</h2>
          <div>
            내용
          </div>
        </div>

        <div className='form-wrapper'>
          <input className="title-input" type='text' placeholder='제목' />
          <CKEditor
            editor={ClassicEditor}
            data="<p></p>"
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
          <button className="submit-button">입력</button>
        </div>



      </div>
    </BrowserRouter>
  );
}

export default App;
