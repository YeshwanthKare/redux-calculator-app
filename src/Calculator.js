import React from "react"
import styled from "styled-components"
import "./Calculator.css"

const Calculator = () => {
    return (
	<Wrapper>
	    <Settings>
		<h2>Calc</h2>
            </Settings>
	    <Input type="number" placeholder="0"></Input>
	    <Buttons>
	        <Button>7</Button>
		<Button>8</Button>
		<Button>9</Button>
		<DeleteButton>Del</DeleteButton>
		<Button>4</Button>
		<Button>5</Button>
		<Button>6</Button>
		<Button>+</Button>
		<Button>1</Button>
		<Button>2</Button>
		<Button>3</Button>
		<Button>-</Button>
		<Button>.</Button>
		<Button>0</Button>
		<Button>/</Button>
		<Button>x</Button>
		<ResetButton><p>Reset</p></ResetButton>
		<EqualsButton><p>=</p></EqualsButton>
	    </Buttons>	    
        </Wrapper>
	)
}

export default Calculator

const Wrapper = styled.div`
	width:440px;
	height:auto;
	margin-top:105px;
	margin-bottom: 100px;
`

const Settings = styled.div`
	width: 540px;
	height: 44px;
	color: white;
	display: flex;

	h2 {
		font-family: Spartan;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px;
		letter-spacing: -0.53px;
		text-align: center;

	}
`

const Input = styled.input`
	height: 128px;
	width: 100%;
	text-align: right;
	border-radius: 8px;
	border: none;
	background-color: #181f33;
	margin-bottom: 15px;
	color: white;
	font-size: 50px;
	padding: 25px;
	::-webkit-inner-spin-button{
	        -webkit-appearance: none; 
	        margin: 0; 
	}
	::-webkit-outer-spin-button{
	        -webkit-appearance: none; 
	        margin: 0; 
	}
	

	&:focus{
		outline: none;
	}
`

const Buttons = styled.div`
	background-color: #242d44;
	width: 100%;
	// height: 100%;
	padding: 25px;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template: repeat(5, 1fr) / repeat(4, 1fr);
	grid-gap: 15px;
	border-radius: 10px;
`

const Button = styled.div`
	height: 64px;
	width: 100%;
	background-color: #EAE3DC;
	font-size: 25px;
	border-radius: 8px;
	color: #434A59;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s;

	&:hover {
		background-color: aquamarine;
		cursor: pointer;
		color: white;
	}
`

const DeleteButton = styled(Button)`
	background-color: #647198;
	color: white;
`;

const ResetButton = styled(Button)`
	background-color: #647198;
	color: white;
	grid-column: span 2;
`

const EqualsButton = styled(Button)`
	background-color: #D03F2F;
	color: white;
	grid-column: span 2;
`