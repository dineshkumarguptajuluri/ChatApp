import { useState, useEffect, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from "../context/AuthContext";
export default function RetrivePosts(){
    const [imageUrls, setImageUrls] = useState([]);
    const {currentUser}=useContext(AuthContext);

    useEffect(() => {
      const fetchImageUrls = async () => {
        // Reference to the Firestore collection
        const userPostsCollectionRef = collection(db, 'posts', currentUser.uid, 'UserPosts');
  
        try {
          // Fetch documents from the collection
          const querySnapshot = await getDocs(userPostsCollectionRef);
  
          // Extract image URLs from the documents
          const urls = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.img) {
              urls.push(data.img);
            }
          });
  
          // Update the state with image URLs
          setImageUrls(urls);
        } catch (error) {
          console.error('Error fetching image URLs:', error);
        }
      };
  
      fetchImageUrls();
    }, [currentUser.uid]);
  
    return (
      <div>
        <h2>User's Image URLs</h2>
        <ul>
          {imageUrls.map((url, index) => (
            <li key={index}>
              <img src={url} alt={` ${index}`} style={{ maxWidth: '200px', maxHeight: '200px' }}/>
            </li>
          ))}
        </ul>
      </div>
    );
}