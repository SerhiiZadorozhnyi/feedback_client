import styled from 'styled-components'

const Root = styled.div`
  // background-color: #FFF;
  // position: absolute;
  position: relative;

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {

  }
`;

const Sun = styled.div`
  background: #FAD34F;
  opacity: 0.1;
  border-radius: 50%;
  position: absolute;
  width: 87px;
  height: 87px;
  display: none;

  @media (min-width: 768px) {
    top: 21px;
    margin-left: 714px;
    display: block;

  }

  @media (min-width: 1024px) {

  }
`;

const Earch = styled.img`
  position: absolute;
  right: auto;
  position: static;
  // margin-left: 893px;
  margin-right: auto;
  position: absolute;
  right: 0px;
  // bottom: -44px;

  @media (min-width: 768px) {
    width: 626px;
    height: 920px;
    // rigth: 0px;
    // margin-left: 100%;
  }

  @media (min-width: 1024px) {

  }
`;

const EllowSmall = styled.div`
  position: absolute;

  @media (min-width: 768px) {
    width: 88px;
    height: 88px;
    background: #FAD34F;
    transform: rotate(-35.19deg);
    border-radius: 50%;
    left: 46px;
    top: 40px;

  }

  @media (min-width: 1024px) {

  }
`;

const EllowSmallSmile = styled.svg`
  position: absolute;
  transform: rotate(30.19deg);
  top: 19px;
  left: 43px;

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {

  }
`;

const EllowMedium = styled.div`
  position: absolute;
  background: #FAD34F;
  width: 127px;
  height: 127px;
  border-radius: 50%;
  z-index: 3;
  top: 15px;
  left: 15px;

  @media (min-width: 768px) {
    top: 516px;
    left: auto;
    right: 550px;
  }

  @media (min-width: 1024px) {

  }
`;

const EllowMediumSmile = styled.svg`
  position: absolute;
  top: 64px;
  left: 71px;

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {

  }
`;

const PinkElipse = styled.div`
  position: absolute;
  background: #F472B7;
  width: 214px;
  height: 214px;
  border-radius: 50%;
  z-index: 2;
  display: none;

  @media (min-width: 768px) {
    display: block;
    top: 586px;
    // left: 814px;
    right: 423px;
  }

  @media (min-width: 1024px) {

  }
`;

const CloudPinkSmile = styled.svg`

  @media (min-width: 768px) {
    position: absolute;
    left: 39px;
    top: 85px;
    // transform: matrix(-0.74, 0.67, 0.67, 0.74, 0, 0);
  }

  @media (min-width: 1024px) {

  }
`;

export {
  Root,
  Sun,
  Earch,
  EllowSmall,
  EllowMedium,
  PinkElipse,
  CloudPinkSmile,
  EllowSmallSmile,
  EllowMediumSmile,
};