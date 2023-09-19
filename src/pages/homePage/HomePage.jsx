//External Lib Import
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

//Internal Lib Import

const HomePage = () => {
  // const navigation = useNavigate();

//   useEffect(() => {
//     if (newlyCreatedBoard) {
//       navigation(`/boards/${newlyCreatedBoard._id}`);
//     }
//   }, [newlyCreatedBoard]);

  return (
    <div className="flex justify-center md:items-start gap-5 min-h-[70vh] flex-col mx-2 md:mx-10">
      <h2 className="md:text-center text-5xl">Getting started</h2>
      <p className="max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic voluptate omnis minu quas soluta facilis porro nihil accusantium obcaecati.
      </p>
      <button
        // onClick={() => boardCreate()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
      >
        + New
      </button>
    </div>
  );
};

export default HomePage;