import { collection, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { nanoid } from "nanoid";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, getDoc, addDoc } from "firebase/firestore";

// Upload post to firebase database
const uploadPost = async (post, file) => {
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();

  // Create a storage reference from our storage service
  const imageRef = ref(storage, file.name);

  try {
    const id = nanoid();
    uploadBytes(imageRef, file);
    const url = await getDownloadURL(ref(storage, file.name))
    await setDoc(doc(db, "posts", id), {
      ...post,
      pid: id,
      likes: [],
      image: url,
      creationDate: new Date()
    });
  } catch (e) {
  }
};

// Like Post
const likePost = async (pid, uid) => {
  // If user already exists in likes, then delete it
  // Else add UID to post
  // Check likes amount by checking array length of document

  try {
    const docRef = doc(db, "posts", pid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const data = docSnap.data();
      const currentLikes = data.likes;
      let likes = []
      if (currentLikes.includes(uid)) {
        likes = currentLikes.filter((item) => item !== uid)
      } else {
        likes = currentLikes
        likes.push(uid)
      }
      setDoc(docRef, { likes: likes }, { merge: true })
    }
  }
  catch (e) {
    console.error(e.message)
  }
}

// Get all posts from database

export { uploadPost, likePost };
