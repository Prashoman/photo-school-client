import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: userRole = {}, isLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      //console.log(res.data.admin);
      return res.data;
    },
  });
  return [userRole, isLoading];
};

export default useRole;
