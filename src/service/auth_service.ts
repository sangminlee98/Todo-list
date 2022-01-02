import { firebaseApp } from './firebase';
import { getAuth, 
        signInWithPopup,
        GoogleAuthProvider,
        GithubAuthProvider,
        Auth,
        UserCredential,
        Unsubscribe,
} from 'firebase/auth';
class AuthService {
    firebaseAuth: Auth;
    googleProvider: GoogleAuthProvider;
    githubProvider: GithubAuthProvider;

    constructor() {
        this.firebaseAuth = getAuth(firebaseApp);
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

    onAuthChange(onUserChanged: Function): Unsubscribe {
        const unsubscribe = this.firebaseAuth.onAuthStateChanged( user => {
            onUserChanged(user);
        })
        return unsubscribe;
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
