import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext, ctx } from "../shared/store";

const RequireAuth = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const { handleLogin, uid, setCity } = useContext<ctx>(StoreContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const city = searchParams.get("city");
    city && setCity(city);

    if (!userId) {
      navigate("/login");
    } else {
      handleLogin(userId);
    }
  }, [uid]);

  return children;
};

export default RequireAuth;
