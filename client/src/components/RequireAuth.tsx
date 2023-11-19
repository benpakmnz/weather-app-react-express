import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext, ctx } from "../shared/store";

const RequireAuth = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const { handleLogin, uid } = useContext<ctx>(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
    } else {
      handleLogin(userId);
    }
  }, [uid]);

  return children;
};

export default RequireAuth;
