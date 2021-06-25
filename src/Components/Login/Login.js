import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebaseConfig from "../../firebase.config";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

// firebase.initializeApp(firebaseConfig);
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function Login() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  ////////////////////// Google auth provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  ////////////////////////// Sign in with popup.
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((err) => console.log(err.message));
  };

  ////////////////////////////////// sign out
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const userSignOut = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(userSignOut);
      })
      .catch((error) => {});
  };

  return (
    <div className="App">
      {user.isSignedIn ? (
        <button className="btn btn-primary m-2" onClick={handleSignOut}>
          Sign Out <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      ) : (
        <button className="btn btn-warning m-2" onClick={handleSignIn}>
          <FontAwesomeIcon icon={faGoogle} /> Register Wigh Google
        </button>
      )}
      <br />

      {user.isSignedIn && (
        <div>
          <p>Welcome {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
    </div>
  );
}

export default Login;
