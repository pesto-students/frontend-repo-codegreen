import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import backIcon from "../../assets/icons/backButton.png"
/* import sampleImg from './Arjuna_Tree.jpg'
import sampleImg2 from './Arjuna_Tree.jpg' */
import Button from './../../components/Button/Button';

const postComments = [
  {
    id: 1,
    postId: 1,
    comment : "I would recommend using a good quality potting mix for planting tomatoes. Make sure the soil is well-draining and the plants receive plenty of sunlight. Water them regularly and provide support as they grow taller. You can also add a layer of mulch to help retain moisture and prevent weeds.",
    author: "Jane Doe",
    date: "16 Oct 2023",
    time: "12:30",
    votes: {
      upvotes: 3,
      downvotes: 0
    }
  },
  {
    id: 2,
    postId: 1,
    comment : "I've had success with using a liquid fertilizer high in potassium for my tomato plants. It helps promote flowering and fruiting. You can also try companion planting with basil or marigolds to deter pests.",
    author: "Alice Smith",
    date: "16 Oct 2023",
    time: "13:45",
    votes: {
      upvotes: 4,
      downvotes: 1
    }
  }];

function Post() {
    const { id } = useParams()
    const [postData, setPostData] = useState({
      id: 1,
      title: "How to plant tomatoes",
      description: "I need help with planting tomatoes in my garden. Any tips?",
      answersCount: 2, 
      votes: {
        upvotes: 5,
        downvotes: 0
      },
      author: "John Doe",
      date: "16 Oct 2023",
      time: "12:00",
      images : ['cloudinaryImgID1', 'cloudinaryImgID2', 'cloudinaryImgID3']
    })

    const [replyBoxVisible, setReplyBoxVisible] = useState(false);
/*   useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/posts/${id}`)
        const data = await response.json()
        setPostData(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }
  , []) */
    return (
    <div className="flex flex-col w-full gap-5 pt-[8%] md:pt-[5%]">
      <Link to="/discuss" >
    <img src={backIcon} alt="" className="w-[40px]"/>
    </Link>

    <h1 className='text-3xl font-bold'>{postData.title}</h1>
    <div className='flex gap-2 text-sm'>
      <span className='font-semibold text-orange'>{postData.author}</span>
      <span className='text-gray'>{postData.date}</span>
      <span className='text-gray'>{postData.time}</span>
    </div>
    <p>{postData.description}</p>
    {/* <div className="w-full flex flex-row gap-4 ">
        {[sampleImg,sampleImg2].map((image, index) => (
          <div className="relative" key={'image' + index}>
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              style={{ width: "100px", height: "100px" }}
            />
           
          </div>
        ))}
      </div> */}
      <Button text="Reply" className='!w-1/4' onClick={ () => setReplyBoxVisible(true)}/>
      {
        replyBoxVisible && <div className='bg-white border-0 w-full lg:w-1/2 rounded-lg p-4 focus-within:ring-0 focus-within:border-2 border-orange animate-reveal-down'>
        <form>
          <textarea name="reply" id="replyBox" className='border-0 focus:ring-0 w-full' rows='5' placeholder='Write your response...'></textarea>
          <div className='flex flex-row justify-end gap-2 mt-4 text-sm'>
            <Button text="Post" className='!w-fit' bgColor='darkest-green'/>
            <Button text="Cancel" className='!w-fit' bgColor='light-green' onClick={ () => setReplyBoxVisible(false)}/>
          </div>
        </form>
      </div>
      }
      <div>
        <h2 className='my-10'>{postComments.length} comments</h2>
        {postComments.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-2 border-b-2 border-gray py-4 text-base mb-10">
            <div className="flex flex-row gap-2">
              <span className="font-semibold text-orange">{comment.author}</span>
              <span className="text-gray">{comment.date}</span>
              <span className="text-gray">{comment.time}</span>
            </div>
            <p>{comment.comment}</p>
            <div className="flex flex-row gap-2">
              <span>{comment.votes.upvotes} upvotes</span>
              <span>{comment.votes.downvotes} downvotes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post