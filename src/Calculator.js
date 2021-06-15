import styled from "styled-components"
import "./Calculator.css"

const Calculator = () => {
    return (
	<Wrapper>
	    <Settings>
		<h2>Calc</h2>
            </Settings>
	    {/* <Input>
		<Button>1</Button>
		<Button>2</Button>
		<Button>3</Button>
		<Button>4</Button>
		<Button>5</Button>
		<Button>6</Button>
		<Button>7</Button>
		<Button>8</Button>
		<Button>9</Button>
		<Button>0</Button>
		<Button>+</Button>
		<Button>-</Button>
		<Button>*</Button>
		<Button>/</Button>
		<Button>%</Button>
	    </Input> */}
        </Wrapper>
	)
}

export default Calculator

const Wrapper = styled.div`
	background-color: pink;
	width:540px;
	height:708px;
	margin-top:75px;
`

const Settings = styled.div`
	
`
