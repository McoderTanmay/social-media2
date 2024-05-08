import { useEffect, useState } from "react";

import "../Home/Home.css";

import Left from "../../Components/LeftSide/Left";
import Middle from "../../Components/MiddleSide/Middle";
import Right from "../../Components/RightSide/Right";
import Nav from "../../Components/Navigation/Nav";
import { baseUrl, getRequest, postRequest } from "../../utils/services";

const Home = ({ setFriendsProfile, data }) => {
  const [posts, setPosts] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoadng] = useState()

  const [body, setBody] = useState("");
  const [importFile, setImportFile] = useState("");

  useEffect(()=>{
    const fetchPosts=async ()=>{
      const response = await getRequest(`${baseUrl}post/get-all-post`)
      setPosts(response?.data);
    }
    fetchPosts();
  },[])

  const handlePostSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image",images);
    setLoadng(true);
    const upload = await postRequest(`${baseUrl}post/uplaodImage`, formData)
    setLoadng(false);
    console.log(upload);
    const data = {
      postedBy:data._id,
      content:body,
      image:upload
    }

    const response = await getRequest(`${baseUrl}post/createPost`,data);
    console.log(response);
    setBody("");
    setImages(null);
  };

  const [following, setFollowing] = useState("");

  const [showMenu, setShowMenu] = useState(false);
  const [images, setImages] = useState(null);

  return (
    <div className="interface">
      <Nav showMenu={showMenu} setShowMenu={setShowMenu} />
      {loading?<p>Loading...</p>:""}
      <div className="home">
        <Left />

        <Middle
          data = {data}
          handlePostSubmit={handlePostSubmit}
          body={body}
          setBody={setBody}
          importFile={importFile}
          setImportFile={setImportFile}
          posts={posts}
          setPosts={setPosts}
          setFriendsProfile={setFriendsProfile}
          images={images}
          setImages={setImages}
        />

        <Right
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          following={following}
          setFollowing={setFollowing}
        />
      </div>
    </div>
  );
};

export default Home;
