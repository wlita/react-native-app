import React from 'react'

const Locations = function (state = {}, action) {
    const {type, data} = action
    if (type === 'RED_locations') {
        return {
                ...state,
                data
            }
    }
    return state
}

export default Locations
