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
            <p className="   text-xl leading-10 mx-5">
              Email: <br />
              <a
                style={{ color: "yellow" }}
                href="maito:saumaypaul20@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                saumaypaul20@gmail.com
              </a>
            </p>
            <span className="     text-xl leading-10 mx-5">
              LinkedIn: <br />
              <span>
                <a
                  style={{ color: "yellow" }}
                  href="http://www.linkedin.com/in/saumaypaul/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  linkedin.com/in/saumaypaul/
                </a>
              </span>
            </span>
            <p className="   flex-wrap   text-xl leading-10 mx-5">
              Github:
              <br />{" "}
              <a
                style={{ color: "yellow" }}
                href="http://www.github.com/saumaypaul20/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                saumaypaul20
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Connect;
