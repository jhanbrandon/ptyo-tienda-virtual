import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : "select_account"
});

export async function signInWithGooglePopup() {
    let result = null,
        error = null;
    try {
        result = await signInWithPopup(auth, provider);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
