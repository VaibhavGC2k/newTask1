import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { component } = props
  const navigate = useNavigate()
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate('/signin')
      }
    } catch (error) {
      console.log("error")
    }
  }, [])
  return (
    <div>
      {component}
    </div>
  )
};

export default ProtectedRoute
