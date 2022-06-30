import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data//FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutLink from './components/AboutLink'
import Post from './components/page/Post'
import {FeedbackProvider} from './components/context/FeedbackContext'

function App() {

  const [feedback ,setFeedback] = useState(FeedbackData)
  const addFeedback=(newFeedback) =>{
    newFeedback.id= uuidv4()
    setFeedback([newFeedback,...feedback])
  }
  const handleDelete=(id) =>{
    setFeedback(feedback.filter(item=>item.id !== id ))
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={
              <>
              <FeedbackForm handleFeedbackAdd={addFeedback}/>
              <FeedbackStats />
              <FeedbackList handleDelete={handleDelete} />
              </>
            }/>
            <Route path="/about" element={<Post />} />
          </Routes>
        </div>
          <AboutLink />
      </Router>
    </FeedbackProvider>
  )
}

export default App