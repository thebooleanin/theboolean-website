
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    const email = localStorage.getItem("adminEmail");
    
    setIsAdmin(!!adminToken);
    setAdminEmail(email);
  }, []);

  const login = (email: string, token: string) => {
    localStorage.setItem("adminToken", token);
    localStorage.setItem("adminEmail", email);
    setIsAdmin(true);
    setAdminEmail(email);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    setIsAdmin(false);
    setAdminEmail(null);
    navigate("/admin/login");
  };

  return { isAdmin, adminEmail, login, logout };
}
