import React, { forwardRef } from "react";

export const PlayeCard = forwardRef(({ user, number, call }, ref) => {
  return user ? (
    <div className="w-[300px] mx-14  flex flex-col justify-center items-center">
      {!call ? (
        <img
          className="h-[100px] rounded-full border-gray border-2"
          src={user.photoURL}
        />
      ) : (
        <div className="h-[100px] w-[100px] rounded-full border-2 border-black overflow-hidden">
          <video className="mt-[10px]" ref={ref} />
        </div>
      )}
      <div
        className={`flex items-center justify-center text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-br ${
          number === 1
            ? "from-purple-400 via-pink-500 to-red-500"
            : "from-green-400 to-blue-500"
        }`}
      >
        {user.name}
      </div>
    </div>
  ) : (
    <div className="w-[300px] mx-14 flex flex-col justify-center items-center ">
      <img
        className="h-[100px] rounded-full border-gray border-2"
        src="https://freepikpsd.com/media/2019/10/default-image-png-Transparent-Images.png"
      />
      <div className="flex items-center justify-center text-4xl font-extrabold text-center text-transparent text-gray-500">
        No one joined Yet
      </div>
    </div>
  );
});
