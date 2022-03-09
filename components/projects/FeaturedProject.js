import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";

const FeaturedProject = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center mx-4 md:mx-0">
      <div
        className="w-96 relative cursor-pointer"
        onClick={() => router.push("/bandmate")}
      >
        <img src="/bandmate/main.png" className="shadow-xl rounded-md" />
      </div>
      <div className="ml-4 font-medium mt-32 w-96 tracking-widest">
        <section>
          <p className="text-stone-500">Featured Project</p>
          <span className="text-4xl noto-serif">
            <Link href="/bandmate">BandMate</Link>
          </span>
          <p>
            Tinder-like app for musicians{" "}
            <span className="details-button">
              <Link href="/bandmate">details...</Link>
            </span>
          </p>
          <div className="flex gap-4">
            <a
              className="project-link"
              href="https://github.com/krzygrzywygrzy/bandmate_fb"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={24} /> <span className="ml-2">code</span>
            </a>
            <a
              className="project-link"
              href="https://goofy-fermat-44f321.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineEye size={24} /> <span className="ml-2">preview</span>
            </a>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
};

export default FeaturedProject;
