import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
    addDoc,
 
  collection,
  Timestamp,

} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
export default function PostUpload(){
    
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const navigate=useNavigate();
  async function handleSubmit(){

      try {
        //Create user
   
  
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${currentUser.displayName + date}`);
  
        await uploadBytesResumable(storageRef, img).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
           
                const userPostsCollectionRef = collection(db, "posts", currentUser.uid, "UserPosts");

                // Add a new post to the user's UserPosts collection
                await addDoc(userPostsCollectionRef, {
                  id: uuid(), // Generate a unique ID for the post
                  date: Timestamp.now(),
                  img: downloadURL,
                  // Add other fields as needed
                });
                navigate('/posts')

  
        
           
           
            } catch (err) {
              console.log(err);
            
            }
          });
        });
      } catch (err) {
       console.log(err);
      }
  }

      
    return (
        <div className='post'>
            <h1> Hii pOST iMAGE</h1>
          <input type="file" id='post-upload' onChange={(e)=>{
            setImg(e.target.files[0])
          }} />
         
          <button onClick={handleSubmit}>Upload</button>
    
       
        </div>
      );
}