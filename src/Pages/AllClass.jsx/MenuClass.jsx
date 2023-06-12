const MenuClass = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/NWQbtFm/abstract-blur-coffee-shop.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-5 text-5xl font-bold">Our All Classes Here</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuClass;
