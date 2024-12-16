import { auth } from "@/lib/firebase";
import {
  AuthError,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { flushSync } from "react-dom";
import { toast } from "sonner";

export interface IAuthContext {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = useMemo(() => !!user, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      flushSync(() => {
        setUser(user);
        setLoading(false);
      });
    });

    return unsubscribe;
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      flushSync(() => {
        setUser(userCredential.user);
      });
    } catch (error) {
      toast.error((error as AuthError).message);
    }
  }, []);

  const logout = useCallback(async () => {
    await signOut(auth);
    flushSync(() => {
      setUser(null);
    });
  }, []);

  if (loading) {
    return;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;
