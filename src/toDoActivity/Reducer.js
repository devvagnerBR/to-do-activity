const reducer = ( state, action ) => {

    switch ( action ) {
        case '?type=recreational':
            return state = action

        case '?type=social':
            return state = action

        case '?type=busywork':
            return state = action

        case '?type=music':
            return state = action

        case '?type=cooking':
            return state = action

        case '?type=education':
            return state = action

        case '':
            return state = action

        default:
            throw new Error()

    }
}

export default reducer