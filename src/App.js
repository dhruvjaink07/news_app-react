import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App= () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  // setProgress = (progress) => {
    // setState({ progress: progress });
  // }
  // Can use useState Like THis in functional Component
  const [progress, setProgress] = useState(0)
  

    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
          height={3}
          // loaderSpeed={2000}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
            {/* <Route exact path="/general" element={<News setProgress={setProgress} apiKey="dbe57b028aeb41e285a226a94865f7a7" key="general" pageSize={pageSize} country="in" category="general" />}></Route> */}
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    )

  }
  export default App;

