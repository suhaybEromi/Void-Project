import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext(null);
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(state => {
      setUser(state);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
