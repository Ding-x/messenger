
export function createNewMessageBox({commit}, messageBox) {
    return commit ('createNewMessageBox', messageBox)
}
 

export function pickNewMessageBox({commit}, messageBox) {
    return commit ('pickNewMessageBox')
}


export function login({commit}, user) {
    return commit ('login')
}


export function logout({commit}) {
    return commit ('logout')
}


export function setToken({commit}, token) {
    return commit ('setToken')
}


export function showFlyingBird({commit}) {
    return commit ('showFlyingBird')
}

export function hideFlyingBird({commit}) {
    return commit ('hideFlyingBird')
}