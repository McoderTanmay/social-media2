import "./posts.css";
import { CiHeart } from "react-icons/ci";
import { MdInsertComment } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../../utils/services";

function Post({ postId, handelLike, id, content, image, likes }) {
  const [liked, setLiked] = useState(false);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const getUserName = async () => {
      const response = await getRequest(
        `${baseUrl}accounts/get-username/${id}`
      );
      setUserName(response?.data?.user_name);
    };
    getUserName();
  }, [id]);
  const likebtn = () => {
    handelLike(postId);
    console.log(postId);
    setLiked(true);
  };
  return (
    <>
      <div className="post ">
        <div className="name-date">
          <div className="name">{userName ? userName : "Loading..."}</div>
          <div className="date ">a year ago</div>
        </div>
        <div className="content fw-semibold">{content}</div>
        <div className="post-img card-img-top">
          <img src={image.url} alt="img" srcset="" />
        </div>
        <div className="lower d-flex">
          <div className="like">
            <button className="btn" onClick={likebtn}>
              <CiHeart className={liked ? `liked fs-1` : `fs-1`} />
            </button>
            {liked?likes.length+1:likes.length}
          </div>
          <div className="comment">
            <button className="btn">
              <MdInsertComment className="fs-1" />
            </button>
          </div>
          <div className="edit">
            <button className="btn">
              <CiEdit className="fs-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
