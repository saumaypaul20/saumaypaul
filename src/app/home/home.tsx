'use client'
import Links from "@/components/Links/Links";
const Home = () => {

  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setCursorPosition({ x: e.clientX, y: e.clientY });
  //   };
  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <div>
        {/* <div
          className="cursor-blur"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        /> */}
      <div className="flex flex-col items-center justify-center text-center">
      {/* <Image
          src={'https://media.licdn.com/dms/image/C5603AQFfFEWgt2Mscw/profile-displayphoto-shrink_800_800/0/1620647084969?e=1718841600&v=beta&t=IDU8g8Vq-z9RVK-JH7oR6QOQECzAhm2nY6SgsiBmRqk'}
          alt={'Saumay Paul'}
          width={100}
          height={100}
          // style={{width: 150}}
          
        /> */}
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
        5.5 years experienced Front-end Web Developer adept in all stages of advanced web development. <br />
        Proficient in an assortment of technologies, including HTML5, CSS, Javascript, React, React Native, Node js, along with Web3. Knowledgeable in user interface, testing, and debugging processes. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
        </h2>
       </div>
      </div>

      <div className="flex flex-row items-center justify-center mt-20 lg:text-center">
        <Links image="/assets/logos/react-typescript.png" />
        <Links image="/assets/logos/react-native.png" />
        <Links image="/assets/logos/redux.png" />
        <Links image="/assets/logos/htmlcssjs.png"/>
        <Links image="/assets/logos/node.png" />
        
      </div>
      
    </div>
  );
};

export default Home;
