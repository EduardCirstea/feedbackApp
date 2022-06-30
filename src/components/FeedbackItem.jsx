import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card'
function FeedbackItem({item,handleDelete}) {
 
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <FaTimes onClick={()=>handleDelete(item.id)} className='close'/>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem