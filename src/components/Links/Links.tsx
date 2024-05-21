import Image from "next/image";

type Link = {
  name?: string;
  link?: string;
  image?: string;
  altImage?: string;
  rel?: string;
  imageStyle?: {};
  onClick?:any;
  copyText?:string
}

const Links = ({
  name,
  link = "#",
  image = "",
  altImage = "alt image",
  imageStyle = {},
  rel,
  onClick,
  copyText
}: Link) => {
  return (
    <a
      href={link}
      className="group rounded-lg px-5 py-4"
      rel={rel}
      target="_blank"
      onClick={(e)=>{e.preventDefault();onClick(copyText)}}
    >
      {name ? (
        <h2
          className=" text-1xl font-semibold "
          style={{ letterSpacing: "5px" }}
        >
          {name}{" "}
          {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
        </h2>
      ) : (
        <Image
          src={image}
          alt={altImage}
          width={100}
          height={100}
          style={{...imageStyle}}
        />
      )}
    </a>
  );
};

export default Links;
