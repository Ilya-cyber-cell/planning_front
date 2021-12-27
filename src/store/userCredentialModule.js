
export const userCredentialModule = {
    state: () => ({
        login: ''
    }),    
    mutations: {
        setUserCredential(state,loginName){
           state.login=loginName;
        },
    },
    actions: {
    },
    modules: {
    }
}
