import styled from "styled-components";

export const ContainerLogin = styled.div`
  background-color: #ebcf50;
  border: 3px inset #f1f5c7;
  padding: 50px 20px;
  box-shadow: 5px 5px 10px gray;
  form {
    display: flex;
    flex-direction: column;
  }

  form > * {
    margin: 10px;
  }

  form > button {
    display: grid;
    grid-template-columns: 100% max-content;
  }

  form > button > span {
    margin-left: -20px;
  }

  svg.loading {
    width: 25px;
    transform-origin: center;
    animation: rotate 2s linear infinite;
    border-radius: 50%;
    margin: 0 auto;
    background-color: transparent
  }
  .loading-circle {
    fill: none;
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
    stroke: #fff;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -125px;
    }
  }
`;
