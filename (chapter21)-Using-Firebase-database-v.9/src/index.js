import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut, signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
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
  const db = getFirestore();
  const auth = getAuth();

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
  const unsubColone = onSnapshot(a, (snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id: doc.id })
    })
    console.log(books); 
  })

  //real time collection data (В КОНСОЛИ БУДЕТ ВЫКИДЫВАТЬ2  МАССИВА ПОТОМУ ЧТО ПРИКРЕПЛЯЕТ ТАЙМШТАМП В ФАЕРБЕЙС)
  const unsubColtwo = onSnapshot(b, (snapshot) => {
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
const docRef = doc(db, 'books', 'qvGVmyf0VRFcxttPDqsb')

  const unsubDoc = onSnapshot(docRef, (doc) => { //подписались на конкретный документ
    console.log(doc.data(), doc.id)
  })

//updating a document
const updateFortm = document.querySelector('.update')
updateFortm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'books', updateFortm.id.value)

  updateDoc(docRef, {
    title: 'updated title'
  })
  .then(() => {
    updateFortm.reset()
  })

})

//singing user 
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('user created:', cred.user)
      signupForm.reset()
    })
    .catch((err) => {
      console.log(err.message)
    })
})

//logging in and out
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      // console.log('the user singed out')
    })
      .catch((err) => {
        console.log(err)
      })
})

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      // console.log('user logged in:', cred.user)
    })
    .catch((err) => {
      console.log(err)
    })

})

//subscribing  to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log('user status changed:', user)
})

//unsubscribing  to auth changes
const unsubBotton = document.querySelector('.unsub')
unsubBotton.addEventListener('click', () => {
  console.log('unsubsribing')
  unsubColone()
  unsubColtwo()
  unsubDoc()
  unsubAuth()
})