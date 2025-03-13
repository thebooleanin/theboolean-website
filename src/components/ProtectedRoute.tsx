
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "@/hooks/useAdmin";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin === false) {
      navigate("/admin/login");
    }
  }, [isAdmin, navigate]);

  // Show nothing while checking authentication
  if (isAdmin === null) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // If authenticated, show the children
  return isAdmin ? <>{children}</> : null;
};

export default ProtectedRoute;
