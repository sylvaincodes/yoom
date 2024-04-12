import { ClipLoader } from "react-spinners";

export const Loader = () => {
  return <div className="min-h-screen w-full bg-dark-1 flex justify-center items-center gb-dark-1">
    <ClipLoader color="#3498db" size={50} className="text-white" />
  </div>

};