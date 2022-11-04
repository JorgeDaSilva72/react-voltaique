export const Blog = (props) => {
  return (
    <div id="blog" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Notre Blog</h2>
          <p>
            Notre blog pour ceux qui sont sensibles à la cause écologique :
            veille technologique, actus et conseils...
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.index}`} className="col-md-3 col-sm-6 blog">
                  <a href="https://jds-bloghk.vercel.app/">
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="blog-img" />
                    </div>
                  </a>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
