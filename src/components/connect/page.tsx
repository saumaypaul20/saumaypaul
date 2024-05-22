import Image from "../../../node_modules/next/image";
import Links from "../Links/Links";

const Connect = () => {
  const copyToClipboard = (textToCopy:string)=>{
    navigator.clipboard.writeText(textToCopy);
    alert(`Mail Address Copied: ${textToCopy}`)
    return
  }
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
      
           <Links image="./assets/icons/email.svg" link={""}imageStyle={{width:50, height:50}} 
           onClick={copyToClipboard} copyText="saumaypaul20@gmail.com"/>
           
            <Links image="./assets/icons/git.svg" link="http://www.github.com/saumaypaul20/"  rel="noopener noreferrer" imageStyle={{width:50, height:50}}/>
            <Links image="./assets/icons/linkedin.svg" link="http://www.linkedin.com/in/saumaypaul/"  rel="noopener noreferrer" imageStyle={{width:50, height:50}}/>
          </div>
         
        </div>
      </div>
    </main>
  );
};

export default Connect;
