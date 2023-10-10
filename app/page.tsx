"use client";
import { FC } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="ELeaning"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning"
      />
    </div>
  );
};

export default Page;
