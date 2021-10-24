import styled from 'styled-components';

const Root = styled.div`
  background-color: #FFF;
  position: relative;
`;

const Form = styled.form`
  position: relative;
  z-index: 999;
`;

const Label = styled.h1`
  font-family: Apercu Arabic Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 130%;
  color: #3E3E3E;
  margin-top: 179px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {

  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px);
    margin-left: auto;
    margin-right: auto;

  @media (min-width: 768px) { 
    width: 557px;
    margin-left: 150px;
  }
  
  @media (min-width: 1024px) { 
    
  }
`;

const Input = styled.input`
  background: #FFFFFF;
  width: 100%;

  font-family: Apercu Arabic Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 180%;

  border: 1px solid #DCDCDC;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 15px 46px;
  z-index: 999;
  outline: none;

  :active, :hover, :active, :focus {
    border: 1px solid #FFD74F;
    box-shadow: 1px 1px 2px 0 #FFD74F;
  }

  @media (min-width: 768px) {
    width: 557px;
    height: 93px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 8px;
    padding-left: 46px;
    padding-rigth: 46px;
    padding-top: auto;
    padding-bottom: auto;
  }

  @media (min-width: 1024px) {
    
  }
`;

const InputMessage = styled.textarea`
    background: #FFFFFF;    
    width: 100%;

    font-family: Apercu Arabic Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 180%;

    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 35px 36px;
    z-index: 999;
    outline: none;
    resize: none;

    :active, :hover, :active, :focus {
      border: 1px solid #FFD74F;
      box-shadow: 1px 1px 2px 0 #FFD74F;
    }

  @media (min-width: 768px) {
    width: 557px;
    height: 189px;
    
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 45px 46px;
  }

  @media (min-width: 1024px) {
    
  }
`;

const Button = styled.button`
    color: #FFF;
    background: #FAD34F;
    border-radius: 500px;
    border: none;
    margin-top: 23px;
    font-family: Apercu Arabic Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 100px;
    z-index: 999;

    width: 218px;
    height: 73px;

  @media (min-width: 768px) {
    width: 218px;
    height: 73px;
    margin-bottom: 174px;
    

    :hover {
      cursor: pointer;
      background: #FFD74F;
      box-shadow: 1px 1px 2px 0 #FFD74F;
    }
  }

  @media (min-width: 1024px) {
    
  }
`;

export {
    Root,
    Form,
    Label,
    Container,
    Button,
    Input,
    InputMessage,
};