import React from "react";
import styled from "styled-components";
import logo from "../assets/logo2.png";
import Button from "./Button";

export default function Footer() {
  const quickLinks = [
    "Sobre nosotros",
    "Destinos",
    "Último blog",
    "Nuestro equipo",
    "Contacto",
  ];
  const supportLinks = [
    "Asistencia al Cliente",
    "Politica y Privacidad",
    "Terminos y Condiciones",
    "Foro",
    "Tour de Guia",
  ];
  return (
    <Container>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <div className="logo">
              <img src={logo} alt="logo" width={"175"}/>
            </div>
            <p className="desciption">
            Puedes soñar, crear, diseñar y construir el lugar más maravilloso.
            </p>
          </div>
          <ul>
            <li>
              <span> +3243243243324</span>
            </li>
            <li>
              <span>michaelfer7u7@gmail.com</span>
            </li>
           
          </ul>
        </div>
        <div className="col">
          <h2>Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Suporte</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Noticias</h2>
          <div className="newsletter">
            <input type="text" placeholder="Tu Email" />
            <Button text="Subscribe Now" />
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Copyright &copy; Travel. creado por <a href="#">Michael Fernandez</a>
        </span>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  .upper-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 2rem;
    gap: 5rem;
    font-weight: bold;
    .col {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: var(--secondary-text);
      h2 {
        color: black;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          cursor: pointer;
          transition: var(--default-transition);
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .newsletter {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input {
          padding: 1rem 2rem;
          border: none;
          font-size: 1.1rem;
          color: white;
          cursor: pointer;
          background-color: #f8f8f8;
        }
      }
    }
  }
  .lower-footer {
    padding: 2rem 0;
    text-align: center;
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .upper-footer {
      grid-template-columns: 1fr;
    }
  }
`;
