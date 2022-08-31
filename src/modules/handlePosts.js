import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Upload post to firebase database
const uploadPost = async (post, file) => {
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();

  // Create a storage reference from our storage service
  const imageRef = ref(storage, file.name);

  try {
    uploadBytes(imageRef, file).then(snapshot => {
      console.log(snapshot);
      const fileReader = new FileReader();
      console.log(fileReader.readAsDataURL(file));
    });
    const docRef = await addDoc(collection(db, "posts"), post);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Get all posts from database

export { uploadPost };
