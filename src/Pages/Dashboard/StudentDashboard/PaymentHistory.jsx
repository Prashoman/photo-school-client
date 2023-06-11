import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(paymentHistory);

  return (
    <div className="w-full h-full">
      <div>
        <h1>Total Payment in Classes : {paymentHistory.length}</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>TransactionId</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img className="w-22 h-12" src={item.classImage} alt="" />
                  </td>
                  <td>{item.className}</td>
                  <td className="text-orange-500 font-bold">${item.price}</td>
                  <td className="text-orange-500 font-bold">
                    {item.transactionId}
                  </td>
                  <td>
                    <button disabled className="btn btn-sm btn-success">
                      Paid
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
