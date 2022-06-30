import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import Ratings from './Ratings'

function FeedbackForm({handleFeedbackAdd}) {
    const [text,setText] = useState('')
    const [rating,setRating]=useState(10)
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')

    const handleChange=(e)=>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage('')
        } else if (text !== '' && text.trim().length <=10){
            setBtnDisabled(true)
            setMessage('Please put 10 or more characters')
        } else {
            setBtnDisabled(false)
            setMessage('')
        }
        setText(e.target.value)
    }
    const handleSubmit= (e)=>{

        e.preventDefault()
        if(text !== '' && text.trim().length >= 10) {
            const newFeedback= {
                text:text,
                rating:rating,
            }
            handleFeedbackAdd(newFeedback)
        }
        // setText('')
        // setBtnDisabled(true)
        // setMessage('')
    }

  return (
    <Card>    
        <form onSubmit={handleSubmit}>
            <h2> Please leave us a feedback</h2>
            <Ratings select={(rating)=>setRating(rating)}/>
            <div className='input-group'>
                <input  onChange={handleChange} type={text}></input>
                <Button type={'submit'} isDisabled={btnDisabled}
                >{'submit'}</Button>
            </div>
            <div>{message}</div>
        </form>
    </Card>
  )
}

export default FeedbackForm