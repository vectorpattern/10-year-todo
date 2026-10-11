// Paste the Firebase web app config from Firebase Console > Project settings.
// Keep this file free of private service-account credentials.
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  appId: ""
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);
