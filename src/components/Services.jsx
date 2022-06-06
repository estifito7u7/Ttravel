import React from "react";
import styled from "styled-components";

 
export default function Services() {
const lottie1  = "https://assets1.lottiefiles.com/packages/lf20_a81muhei.json"
const lottie2 = "https://assets4.lottiefiles.com/packages/lf20_vchd0li0.json"
const lottie3 = "https://assets1.lottiefiles.com/packages/lf20_aiufmjky.json" 
const lottie4 = "https://assets4.lottiefiles.com/packages/lf20_paq1c4le.json"
  const data = [
    {
      image: lottie1,
      title: "Elija el destino",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: lottie2,
      title: "Explorar el lugar",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: lottie3,
      title: "Comience su viaje",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: lottie4,
      title: "Disfrutemos",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
  ];
  return (
    <Section id="services">
      <div className="services">
        {data.map(({ image, title, description }) => {
          return (
            <div className="service" key={title}>

    <lottie-player src={image}  background="transparent"  speed="1"  style={{width: '128px;', height: '128px;'}}  loop  autoplay hover></lottie-player>
          
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 8rem 4rem;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .service {
      padding: 1.5rem 2rem;
      text-align: center;
      background-color: var(--card-grey);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      h3 {
        color: var(--primary-text);
      }
      p {
        color: var(--secondary-text);
        font-weight: bold;
      }
      img {
        height: 128px;
        width: 128px;
      }
      transition: var(--default-transition);
      &:hover {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 3rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
