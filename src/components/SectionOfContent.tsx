import React from "react";

interface SectionOfContentTypes {
  title: string;
  children: React.ReactNode;
}

const SectionOfContent: React.FC<SectionOfContentTypes> = ({
  title,
  children,
}) => {
  return (
    <section className="max-w-[1300px] mx-auto mt-8">
      <h2 className="text-2xl text-blue-700 mb-4">{title}</h2>
      <div className="grid grid-cols-[repeat(auto-fill,250px)] gap-[.7rem] gap-y-8 w-full">
        {children}
      </div>
    </section>
  );
};

export default SectionOfContent;
