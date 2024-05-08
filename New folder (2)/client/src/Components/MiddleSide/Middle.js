import InputPost from '../Post/InputPost'
import Homepage from "../Home/Homepage"
import "../MiddleSide/Middle.css"


const Middle = ({
                data,
                handlePostSubmit,
                body,
                setBody,
                setImportFile,
                images,
                setImages,
                handleImageChange,
                emptImg,
                setEmptImg,
                posts
              }) => {
    
  
  return (
    <div className='M-features'>
        <InputPost
        handlePostSubmit={handlePostSubmit}
        body ={body}
        setBody ={setBody}
        setImportFile ={setImportFile}
        images={images}
        handleImageChange={handleImageChange}
        emptImg ={emptImg}
        setEmptImg={setEmptImg}
        setImages={setImages}
        />

        <Homepage posts={posts} data = {data}/>
    </div>
  )
}

export default Middle