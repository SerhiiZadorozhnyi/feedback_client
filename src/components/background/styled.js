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
  margin-right: auto;
  position: absolute;
  right: 0px;
  

  @media (min-width: 768px) {
    width: 626px;
    height: 920px;
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
  display: none;

  @media (min-width: 768px) {
    top: 516px;
    left: auto;
    right: 550px;
  }

  @media (min-width: 1024px) {
    display: block;
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
    // display: block;
    top: 586px;
    // left: 814px;
    right: 423px;
  }

  @media (min-width: 1024px) {
    display: block;
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

const CloudOne = styled.svg`
  position: absolute;
  display: none;

  @media (min-width: 768px) {
    width: 138px;
    height: 103px;
    top: 131px;
    left: 616px;
    fill-opacity: 0.05;
    display: block;
  }

  @media (min-width: 1024px) {

  }
`;

const CloudTwo = styled.svg`
  position: absolute;
  display: none;

  @media (min-width: 768px) {
    width: 218px;
    height: 164px;
    top: 101px;
    left: 775px;
    fill-opacity: 0.9;
    display: block;
  }

  @media (min-width: 1024px) {

  }
`;

const CloudThree = styled.svg`
  position: absolute;
  display: none;

  @media (min-width: 768px) {
    width: 172px;
    height: 129px;
    top: 256px;
    left: 693px;
    opacity: 0.5;
    display: block;
  }

  @media (min-width: 1024px) {

  }
`;

const CloudFor = styled.svg`
  position: absolute;
  display: none;

  @media (min-width: 768px) {
    width: 169px;
    height: 128px;
    top: 746px;
    left: 731px;
    opacity: 0.5;
    display: block;
  }

  @media (min-width: 1024px) {

  }
`;

const CloudFive = styled.svg`
  position: absolute;
  display: none;

  @media (min-width: 768px) {
    width: 218px;
    height: 164px;
    top: 626px;
    left: 343px;
    opacity: 0.5;
    display: block;
  }

  @media (min-width: 1024px) {

  }
`;
const CloudSix = styled.svg`
  position: absolute;
  display: none;

  @media (min-width: 768px) {
    width: 288px;
    height: 216px;
    top: 761px;
    left: 141px;
    opacity: 0.5;
    display: block;
  }

  @media (min-width: 1024px) {

  }
`;
const CloudSeven = styled.svg`
  position: absolute;
  display: none;

  @media (min-width: 768px) {
    width: 131px;
    height: 99px;
    top: 689px;
    left: 101px;
    opacity: 0.5;
    display: block;
  }

  @media (min-width: 1024px) {

  }
`;
const CloudEight = styled.svg`
  position: absolute;
  display: none;

  @media (min-width: 768px) {
    width: 218px;
    height: 164px;
    top: 400px;
    left: -92px;
    opacity: 0.5;
    display: block;
  }

  @media (min-width: 1024px) {

  }
`;
const CloudNine = styled.svg`
  position: absolute;
  display: none;

  @media (min-width: 768px) {
    width: 245px;
    height: 184px;
    top: 185px;
    left: -69px;
    opacity: 0.5;
    dispaly: block;
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
  CloudOne,
  CloudTwo,
  CloudThree,
  CloudFor,
  CloudFive,
  CloudSix,
  CloudSeven,
  CloudEight,
  CloudNine
};