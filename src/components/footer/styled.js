import styled from 'styled-components'

const FooterDiv = styled.div`
  background: #FAFAFA;
  border: 1px solid #D8D8D8;
  box-sizing: border-box;
  overflow: hidden;  

  width: 100%;
  height: 100px;
  position: relative;

  @media (min-width: 768px) {
    height: 200px;
    background: #FAFAFA;
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    overflow: hidden;
  }

  @media (min-width: 1024px) {

  }
`;

const CloudPink = styled.div`
  display: none;
  position: absolute;
  width: 214px;
  height: 214px;
  border-radius: 50%;
  background: #F472B7;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    margin-top: 5px;
    margin-left: 58px;
  }

  @media (min-width: 1024px) {
    
  }
`;

const CloudPinkSmile = styled.svg`

  @media (min-width: 768px) {
    position: absolute;
    left: 39px;
    top: 85px;
  }

  @media (min-width: 1024px) {

  }
`;

const EllowSmall = styled.svg`
  position: absolute;
  left: 5px;
  top: 30px;

  @media (min-width: 768px) {
    position: absolute;
    left: auto;
    right: -40px;
    top: 45px;
  }

  @media (min-width: 1024px) {
    
  }
`;

const VerticalGreen = styled.svg`
  position: absolute;
  right: 30px;

  @media (min-width: 768px) {
    position: absolute;
    right: 127px;
  }

  @media (min-width: 1024px) {
    
  }
`;

const SocialMediaDiv = styled.div`
  position: absolute;
  width: 126px;
  height: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: calc(100% / 2);
  left: calc((100% / 2) - 60px);

  @media (min-width: 768px) {
    position: absolute;
    width: 126px;
    height: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 79px;
    left: 343px;
  }

  @media (min-width: 1024px) {
    
  }
`;

const Linkedin = styled.svg`
  cursor: pointer;
`;

const Twitter = styled.svg`
  cursor: pointer;
`;

const Facebook = styled.svg`
  cursor: pointer;
`;

const Pinterest = styled.svg`
  cursor: pointer;
`;

export {
  FooterDiv,
  CloudPink,
  CloudPinkSmile,
  EllowSmall,
  VerticalGreen,
  SocialMediaDiv,
  Linkedin,
  Twitter,
  Facebook,
  Pinterest,
};