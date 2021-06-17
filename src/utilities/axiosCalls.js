import React from 'react';

export const authorizeAxiosCall = (endpoint, token) => {
//    makes a call to endpoint with token to access data and returns data
}

export const signInAxiosCall = (endpoint, credentials) => {
//    makes a call to endpoint with user login credentials and returns a token
}

export const updateData = (endpoint, editedObject ) => {
//    takes in edited state and makes a post to an endpoint via axios
}

export const deleteData = (endpoint, objectIDtoDelete) => {
//    makes a call to the endpoint, deletes the object chosen and returns a
//    new data set
}

export const addData = (endpoint, objectToAdd) => {
//    makes a call to the endpoint with a new object to be added to the
//    existing data set and then returns that data set.
}