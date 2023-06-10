import { useLoaderData } from "react-router-dom";
import ClassCard from "../Shared/ClassCard/ClassCard";

const AllClass = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="my-9 px-24">
      <div className="mt-7">
        {" "}
        <h1>All Class</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {data.map((item) => (
          <ClassCard key={item._id} items={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
