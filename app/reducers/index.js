import React from 'react'
import {
	combineReducers
} from 'redux'
import login from './login'
import Locations from './Locations'

export default combineReducers({
	login,
	Locations
})