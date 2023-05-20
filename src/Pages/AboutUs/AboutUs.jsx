import React from "react";
import "./AboutUs.css";
import { useState } from "react";

const AboutUs = () => {
  const [state, setstate] = useState("frontend");

  const frontEnd = [
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/react-js.svg",
      name: "React",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/next-js.svg",
      name: "Next.js",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/gatsby.svg",
      name: "Gatsby.js",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/redux.svg",
      name: "Redux",
    },
    {
      image: "https://www.halo-lab.com/images/services/services-icons/mobx.svg",
      name: "MobX",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/webpack.svg",
      name: "Webpack",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/graph-ql.svg",
      name: "GraphQL",
    },
  ];

  const backEnd = [
    {
      image:
        "	https://www.halo-lab.com/images/common/technologies/interpretators/node.svg",
      name: "Node.js",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/mongodb.svg",
      name: "MongoDB",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/express.svg",
      name: "Express",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/fastify.svg",
      name: "Fastify",
    },
    {
      image: "https://www.halo-lab.com/images/services/services-icons/aws.svg",
      name: "AWS",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/nest-js.svg",
      name: "Nest.js",
    },
    {
      image:
        "	https://www.halo-lab.com/images/services/services-icons/rabbit-mq.svg",
      name: "RabbitMQ",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/postgresql.svg",
      name: "PostgreSQL",
    },
  ];

  const CMS = [
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/sanity.svg",
      name: "Sanity",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/prismic.svg",
      name: "Prismic",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/wordpress.svg",
      name: "Wordpress",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/shopify.svg",
      name: "Shopify",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/big-commerce.svg",
      name: "BigCommerce",
    },
  ];

  function CardRenders() {
    if (state == "frontend") {
      return (
        <>
          {frontEnd.map((item) => {
            return (
              <>
                <div id="tCard">
                  <img
                    src={item.image}
                    width={60}
                    alt=""
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
                  />
                  <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
                  >
                    {item.name}
                  </div>
                </div>
              </>
            );
          })}
          ;
        </>
      );
    } else if (state == "backend") {
      return (
        <>
          {backEnd.map((item) => {
            return (
              <>
                <div id="tCard">
                  <img
                    src={item.image}
                    width={60}
                    alt=""
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
                  />
                  <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
                  >
                    {item.name}
                  </div>
                </div>
              </>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          {CMS.map((item) => {
            return (
              <>
                <div id="tCard">
                  <img
                    src={item.image}
                    width={60}
                    alt=""
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
                  />
                  <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
                  >
                    {item.name}
                  </div>
                </div>
              </>
            );
          })}
        </>
      );
    }
  }

  return (
    <div className="aboutUs">
      <div id="aboutUsBody"  data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500">
        <h1 id="offerWideRange">
          OUR <br /> TECHNOLOGIES
        </h1>
        <p id="">
          We believe, our clients deserve to be remarkable in their business.
          The studio develops the products people appreciate all around the
          world.
        </p>
      </div>
      <div id="technologies" style={{ marginTop: 50 }}>
        <div id="selections">
          <div className={`option ${ state == 'frontend' && "active"}` } onClick={() => setstate("frontend")}>
            FRONTEND
          </div>
          <div className={`option ${ state == 'backend' && "active"}` } onClick={() => setstate("backend")}>
            BACKEND
          </div>
          <div className={`option ${ state == 'blockchain' && "active"}` } onClick={() => setstate("blockchain")}>
            CMS
          </div>
        </div>
        <div id="technolgiesCards">
          <CardRenders />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
