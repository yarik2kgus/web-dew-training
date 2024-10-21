import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyByQr0SKK03-holvdCQgE58VTHK1H1UedM",
    authDomain: "fir-9-5a3e5.firebaseapp.com",
    projectId: "fir-9-5a3e5",
    storageBucket: "fir-9-5a3e5.appspot.com",
    messagingSenderId: "581439187298",
    appId: "1:581439187298:web:9758d0f7152b61ebf5e43b"
  };
  //init firebase app
  initializeApp(firebaseConfig);

  //init services
  const db = getFirestore()

  //collection ref
  const colRef = collection(db, 'books');

  //queries 
  const a = query( //сортировка по названию титула с фильтром по автору 
    colRef, 
    where("author", "==", "patrick rothfuss"), 
    orderBy('title', 'desc') //desc - сортировка по убыванию
  );

  const b = query( //сортировка по времени создания
    colRef,  
    orderBy('createdAt') //сортировка потребует создания index в firebase
  );
  
  //real time collection data (only with author patrick rothfuss)
  onSnapshot(a, (snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id: doc.id })
    })
    console.log(books); 
  })

  //real time collection data (В КОНСОЛИ БУДЕТ ВЫКИДЫВАТЬ2  МАССИВА ПОТОМУ ЧТО ПРИКРЕПЛЯЕТ ТАЙМШТАМП В ФАЕРБЕЙС)
  onSnapshot(b, (snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id: doc.id })
    })
    console.log(books); 
  })
  
  // adding docs
 const addBookForm = document.querySelector('.add')
 addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp()
  })
  .then(() => {
    addBookForm.reset()
  })
})

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'books', deleteBookForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteBookForm.reset()
    })
})

//get single document