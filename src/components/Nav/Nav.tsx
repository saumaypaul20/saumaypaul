import Links from '../Links/Links';

const Nav = () => {
    return (
        <div className="mb-32 flex items-center justify-around lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-center">
        <Links name ="About" link="/" />
        <Links name ="Experience" link="/portfolio" />
        <Links name ="Connect"  link="/connect" />
      </div>
    );
}

export default Nav;