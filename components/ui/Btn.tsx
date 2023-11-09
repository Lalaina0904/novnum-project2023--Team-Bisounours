import React from "react";

type BtnProps = {
  children: React.ReactNode;
  roundedMd: boolean;
  btnClass: string;
};

const Btn = ({ children, roundedMd, btnClass }: BtnProps) => {
  return (
    <div>
      <button
        className={`${btnClass} px-5 py-3 ${
          roundedMd ? "rounded-md" : "rounded-[3px]"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default Btn;
