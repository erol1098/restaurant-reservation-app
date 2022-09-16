import { useFirestore, initialize } from 'web-firebase';

const useFirebase = () => {
  const { db } = initialize({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_STORAGE_BUCKET,
    appId: process.env.REACT_APP_APP_ID,
  });

  //? For Firestore Database CRUD Operations
  const { addNewEntry, getEntries, updateEntries, deleteEntry, error } =
    useFirestore(db);

  return {
    //? Firestore
    addNewEntry,
    getEntries,
    updateEntries,
    deleteEntry,
    error,
  };
};
export default useFirebase;
