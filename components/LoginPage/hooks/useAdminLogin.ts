import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

export const ADMIN_LOGIN = gql(`
  mutation AdminLogin($data: AdminLoginRequest!) {
    adminLogin(data: $data) {
      accessToken
    }
  }
`);

export const useAdminLogin = () => {
  const router = useRouter();
  const [adminLogin, { loading, error, data }] = useMutation(ADMIN_LOGIN);
  const postLogin = (accessToken: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("token", `${accessToken}`);

      router.push("/dashboard");
    }
  };
  return { adminLogin, postLogin, loading, error, data };
};
