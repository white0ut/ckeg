import * as firebase from 'firebase'
import sectionModel from 'models/section'
import todoModel from 'models/todo'

let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyBLRZ3NCAmpwto3v18wqhr-vGliLxfYwGE",
    authDomain: "ckeg-display.firebaseapp.com",
    databaseURL: "https://ckeg-display.firebaseio.com",
    projectId: "ckeg-display",
    storageBucket: "ckeg-display.appspot.com",
    messagingSenderId: "404124002483"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}

export const getSectionsDB = () => {
  return database.ref('/').once('value')
}

// add new section
export const addSection = (name) => {
  console.log("adding: " + name)
  let key = database.ref('/').push().key
  let model = sectionModel(key, name, 
    firebase.database.ServerValue.TIMESTAMP)
  return database.ref('/' + key).set(model)
}

// get specified section
export const getTodoDB = (sectionId) => {
  return database.ref(`/${sectionId}`).once('value')
}

// add new todo item into specified section
export const addTodoItem = (id, name) => {
  return new Promise((resolve, reject) => {
    database.ref(`/${id}`).once('value').then((todo) => {
      let todos = todo.val().todos || []
      let key = database.ref(`/${id}`).push().key

      todos.push(todoModel(key, name,
        firebase.database.ServerValue.TOMESTAMP))

      database.ref(`/${id}/todos`).set(todos)
        .then( res => {resolve(res)})
        .catch( error => {reject(error)})
    })
  })
}
