import Image from "../../../node_modules/next/image";
import Links from "../Links/Links";

const Connect = () => {
  return (
    <main className="flex flex-col items-center ">
      <div>
        <div className="flex flex-col items-center justify-center text-center">
         
          <h2
            className="pb-10 text-5xl font-semibold "
            style={{ letterSpacing: "10px" }}
          >
            {" "}
            Connect with Me!
          </h2>

          <div className="flex flex-column pt-5 mt-5">
            <Links image="/assets/icons/email.svg"link="maito:saumaypaul20@gmail.com" imageStyle={{width:50, height:50}} />
            <Links image="/assets/icons/git.svg" link="http://www.linkedin.com/in/saumaypaul/" imageStyle={{width:50, height:50}}/>
            <Links image="/assets/icons/linkedin.svg" link="http://www.github.com/saumaypaul20/" imageStyle={{width:50, height:50}}/>
          </div>
         
        </div>
      </div>
    </main>
  );
};

export default Connect;
