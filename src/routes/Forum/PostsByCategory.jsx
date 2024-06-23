import React, { useEffect, useState } from "react";
import backIcon from "../../assets/icons/backButton.png";
import Button from "../../components/Button/Button";
import postIconBullet from "../../assets/icons/postBulletIcon.png";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";
import api from "../../hooks/axiosConfig"

function PostsByCategory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await api.get(
          `api/forum`
        );
        const data = response.data;
        setPosts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPosts();
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen ? (
        <CreatePost onClose={() => setIsModalOpen(false)} />
      ) : (
        <div className="flex flex-col w-full gap-10 pt-[8%] md:pt-[5%]">
          <Link to="/discuss">
            <img src={backIcon} alt="" className="w-[40px]" />
          </Link>
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-bold text-3xl">Posts</h1>
            <Button
              text="Create Post"
              className="!w-[20%]"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          <div id="posts" className="w-full">
            <table className="table-fixed w-full">
              <thead className="text-gray text-sm md:text-base">
                <tr>
                  <th className="w-1/2 py-2">post</th>
                  <th className="py-2 text-center md:text-left">answers</th>
                </tr>
              </thead>

              <tbody>
                {posts.map((post) => {
                  return (
                    <tr className="text-sm md:text-base">
                      <td className="flex gap-4 items-center font-bold py-4 ">
                        <img
                          src={postIconBullet}
                          className="w-[30px] md:w-auto"
                        />
                        <Link to={`/discuss/${post._id}`}>{post.title}</Link>
                      </td>
                      <td className="text-center md:text-left">
                        {post.comments.length}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default PostsByCategory;
