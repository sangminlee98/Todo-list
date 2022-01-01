import { firebaseApp } from './firebase';

import { FirebaseApp } from 'firebase/app';
import { getAuth, 
        signInWithPopup,
        GoogleAuthProvider,
        GithubAuthProvider,
        Auth,
        UserCredential,
} from 'firebase/auth';

class AuthService {
    firebaseAuth: Auth;
    googleProvider: GoogleAuthProvider;
    githubProvider: GithubAuthProvider;

    constructor(currentAuth: FirebaseApp) {
        this.firebaseAuth = getAuth(currentAuth);
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    };

    login(providerName: string): Promise<UserCredential> {
        const authProvider = this.getProvider(providerName);
        return signInWithPopup(this.firebaseAuth, authProvider);
    }

    logout() {
        this.firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged: Function) {
        this.firebaseAuth.onAuthStateChanged( user => {
            onUserChanged(user);
        })
    }

    getProvider(providerName: string): GoogleAuthProvider | GithubAuthProvider {
        switch(providerName) {
            case 'Google' :
                return this.googleProvider;
            case 'Github' :
                return this.githubProvider;
            default :
                throw new Error(`not supported provider: ${providerName}`);
        }
    }
}

export default AuthService;