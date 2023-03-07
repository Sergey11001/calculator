
interface CalcProps {
    prevNumber:string,
    currentNumber:string,
    operation:string
}

type TCalcByOption = (props:CalcProps) => number | null | undefined
export const calcByOption:TCalcByOption = ({prevNumber, currentNumber, operation}) => {
    const prev = Number(prevNumber)
    const current = Number(currentNumber)
    switch (operation){
        case "/":
            return current===0 ? null : prev/current
        case "x":
            return prev*current
        case "+":
            return prev+current
        case "-":
            return prev-current
    }
}