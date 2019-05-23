import * as actionTypes from './actionTypes'

export const addPerson = (name, age) => {
  return {
    type: actionTypes.ADD_PERSON,
    personData: {name: name, age: age}
  }
}


export const removePerson = (id) => {
  return {
    type: actionTypes.REMOVE_PERSON,
    personId: id
  }
}
