"use client";
import Links from "@/components/Links/Links";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1
          className="mt-10 pt-10 text-7xl font-semibold "
          style={{ letterSpacing: "10px" }}
        >
          {" "}
          Saumay Paul
        </h1>
        <h3
          className="mt-2 pt-5 text-3xl font-semibold "
          style={{ letterSpacing: "15px" }}
        >
          {" "}
          Frontend Developer
        </h3>

        <div className="w-3/4	">
          <h2 className="flex mt-10 pt-5 text-xl leading-10 lg:w-full">
            6+ years experienced Front-end Web Developer adept in all stages of
            advanced web development. <br />
            Proficient in an assortment of technologies, including HTML5, CSS,
            Javascript, React, React Native, Node js, along with Web3.
            Knowledgeable in user interface, testing, and debugging processes.
            Able to effectively self-manage during independent projects, as well
            as collaborate as part of a productive team.
          </h2>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mt-20 lg:text-center">
        <Links image="./assets/logos/react-typescript.png" />
        <Links image="./assets/logos/react-native.png" />
        <Links image="./assets/logos/redux.png" />
        <Links image="./assets/logos/htmlcssjs.png" />
        <Links image="./assets/logos/node.png" />
      </div>
    </div>
  );
};

export default Home;
