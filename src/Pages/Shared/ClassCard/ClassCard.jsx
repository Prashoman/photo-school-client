import useRole from "../../../Hooks/useRole";

const ClassCard = ({ items, handleSelectClass }) => {
  const [userRole] = useRole();
  //console.log(userRole);
  const {
    classImage,
    className,
    seats,
    price,
    instructorName,
    instructorImage,
  } = items || {};
  return (
    <div
      className={`card w-full h-full ${
        seats === 0 ? "bg-red-500" : "bg-base-100"
      }  px-5 py-4 shadow-xl`}
    >
      <figure className="px-5 pt-10">
        <img src={classImage} alt="Shoes" className="w-full h-44 rounded-xl" />
      </figure>
      <div className="space-y-3">
        <h2 className="card-title mt-3">{className}</h2>
        <div className="flex gap-4">
          <div className="avatar">
            <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={instructorImage} />
            </div>
          </div>
          <h1 className="text-xl font-bold uppercase">{instructorName}</h1>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-xl">
            Price : <span className="text-orange-500 font-bold">${price}</span>
          </h1>
          <div>Available seats : {seats}</div>
        </div>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleSelectClass(items)}
            disabled={
              userRole?.instructor?.instructor ||
              userRole?.admin?.admin ||
              seats === 0
            }
            className="btn btn-sm btn-primary"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;