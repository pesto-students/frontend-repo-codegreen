import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import backIcon from "../../assets/icons/backButton.png"
import Button from './../../components/Button/Button';
import axios from "../../hooks/axiosConfig";

function Post() {
    const { id } = useParams()
    const [postData, setPostData] = useState({})

    useEffect(() => {
      console.log("wqqwd");
      const getPost = async () => {
        try {
          const response = await axios.get(`api/forum/`);
          let data = response.data;
          data = data.filter(post => post._id === id)
          setPostData(data[0]);
          console.log(data[0]);
        } catch (error) {
          console.log(error.message);
        }
      };
      getPost();
    }, [id]);

    const [replyBoxVisible, setReplyBoxVisible] = useState(false);

    return (
    <div className="flex flex-col w-full gap-5 pt-[8%] md:pt-[5%]">
      <Link to="/discuss" >
    <img src={backIcon} alt="" className="w-[40px]"/>
    </Link>

     <h1 className='text-3xl font-bold'>{postData.title}</h1>
    <div className='flex gap-2 text-sm'>
      <span className='font-semibold text-orange'>{postData.author?.firstName} {postData.author?.lastName}</span>
      {/* <span className='text-gray'>{postData.date}</span>
      <span className='text-gray'>{postData.time}</span> */}
    </div>
    <p>{postData.description}</p>
    <div className="w-full flex flex-row gap-4 ">
        {postData.imageUrls?.map((image, index) => (
          <div className="relative" key={'image' + index}>
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              style={{ width: "100px", height: "100px" }}
            />
           
          </div>
        ))}
      </div>
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
        <h2 className='my-10'>{postData.comments?.length} comments</h2>
        {postData.comments?.length > 0 && postData.comments.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-2 border-b-2 border-gray py-4 text-base mb-10">
            <div className="flex flex-row gap-2">
              <span className="font-semibold text-orange">{comment.author.firstName} {comment.author.lastName}</span>
              <span className="text-gray">{comment.date}</span>
              <span className="text-gray">{comment.time}</span>
            </div>
            <p>{comment.comment}</p>
           
          </div>
        ))}
      </div>
    </div> 
  )
}

export default Post