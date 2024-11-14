import React, { useEffect, useState } from "react";
import { auth, signInWithGoogle, logOut } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Bienvenue, {user.displayName}!</p>
          <button onClick={logOut}>Se déconnecter</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Se connecter avec Google</button>
      )}
    </div>
  );
};

export default Auth;
