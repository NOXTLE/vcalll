import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [id, setId] = useState();

  const navigate = useNavigate();
  const handleSubmit = useCallback(() => {
    navigate(`/room/${id}`);
  }, [navigate, id]);
  return (
    <div className="h-screen w-screen bg-zinc-900 text-white text-2xl overflow-hidden">
      <div className="text-center pt-5">
        Welcome To The Video Conference Powered By Meteor©
      </div>
      <div className=" w-full flex items-center justify-center h-full">
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="Enter room ID"
          className="focus:outline-amber-300 focus:border-blue-50 focus:border-2 border-2 w-[20vw] px-4 py-2"
        ></input>
        <button
          className="px-4 box-border py-2 h-13 w-20 bg-zinc-500"
          onClick={handleSubmit}
        >
          Join
        </button>
      </div>
    </div>
  );
};
