// Paste the Firebase web app config from Firebase Console > Project settings.
// Keep this file free of private service-account credentials.
export const firebaseConfig = {
  apiKey: "AIzaSyBh-9OmWPSSQgred1ql-iYcIIY81q3bzqw",
  authDomain: "year-todo.firebaseapp.com",
  projectId: "year-todo",
  appId: "1:208755210088:web:e35abf8c6f61050a3888dd"
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);
