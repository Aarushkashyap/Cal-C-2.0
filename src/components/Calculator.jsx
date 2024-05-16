import React, { useRef, useState } from 'react'
import { PiArrowUUpLeftBold, PiPlusMinus } from "react-icons/pi";
import { FiPercent } from "react-icons/fi";
import { FaPercent, FaDivide, FaMinus, FaPlus,FaEquals } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { LuDot } from "react-icons/lu";
import Button from './Button';


const Buttons = {
    row1: [
        {
            value: "AC",
            label: "AC",
            className: "bg-light-300 dark:bg-dark-300",
            type: "clear",
        },
        {
            value: "+/-",
            label: <PiPlusMinus size={25} />,
            className: "bg-light-300 dark:bg-dark-300",
            type: "plusminus",
        },
        {
            value: "%", 
            label: <FiPercent size={25}/>,
            className:"bg-light-300 dark:bg-dark-300",
            type: "percent",
        },
        {
            
            value: "/",
            label: <FaDivide size={25} />,
            className: "!bg-primary text-white",
            type: "operator",
        },
    ],
    row2: [
        {value: "7", label: "7", type: "number"},
        {value: "8", label: "8", type: "number"},
        {value: "9", label: "9", type: "number"},
        {
            value: "*",
            label: <RxCross2 size={25} />,
            className: "!bg-primary text-white",
            type: "operator",
        },
    ],
    row3: [
        {value: "4", label: "4", type: "number"},
        {value: "5", label: "5", type: "number"},
        {value: "6", label: "6", type: "number"},
        {
            value: "-",
            label: <FaMinus size={25} />,
            className: "!bg-primary text-white",
            type: "operator",
        },
    ],
    row4: [
        {value: "1", label: "1", type: "number"},
        {value: "2", label: "2", type: "number"},
        {value: "3", label: "3", type: "number"},
        {
            value: "+",
            label: <FaPlus size={25} />,
            className: "!bg-primary text-white",
            type: "operator",
        },
    ],
    row5: [
        { value: "0", label: "0", className: "col-span-2", type:"number"},
        { value: ".", label: <LuDot size={25} />, type: "dot"},
        {
            value: "=",
            label: <FaEquals size={25} />,
            className: "!bg-primary text-white",
            type:"number",
        },
    ],
};

const Calculator = () => {
    const buttonsRef = useRef([]);
    const [inputValue, setInputValue] = useState ([]);
    const [result, setResult] = useState(0);

    const handleButtonClick = (value) => {
        //Get all the clicked button detailId from buttons array
        const button = Object.values(Buttons)
        .flat()
        .find((item) => item.value === value);

        // we will store input values in an array
        // get the last element of the array
        const lastInputValue = inputValue[inputValue.length - 1];

        // function to handle unary operations
        const handleUnaryOperations = (operation) => {
            if(lastInputValue && lastInputValue.type === "number"){
                //perform the function on last value
                const newInputValue = {
                    ... lastInputValue,
                    value: operation(lastInputValue.value),
                    label: operation(lastInputValue.value),
                };
                setInputValue((prev) => [ ... prev.slice(0,-1), newInputValue]);
            }
        };

        //function to handle Numbers
        const handleNumber = () => {
            if(lastInputValue && lastInputValue.type === "number") {
                //if last value is also a number than add in the last value
                let newValue = lastInputValue.value;
                if (lastInputValue.value.toString().length < 15) {
                    // add a limit of 15 characters
                    newValue = lastInputValue.value + value;
                }
                const newInputValue = {
                    ... lastInputValue,
                    value:newValue,
                    label:newValue,
                };
                // update the new value 
                setInputValue((prev) => [ ... prev.slice(0, -1), newInputValue]);
            }
            else{
                // if last value is not a number then just add current as a new
                setInputValue((prev) => [ ... prev, button])
            }
            
        };
        
        //function to handle operator
            const handleOperator = () => {
                if(inputValue.length>0){
                    //only allow operator if input value not empty
                    if(lastInputValue && lastInputValue.type === "operator"){
                        //if last value is already an operator than just replace it 
                        const newInputValue = {
                            ... lastInputValue,
                            value: button.value,
                            label: button.label,
                        }
                        setInputValue((prev)=> [ ... prev.slice(0, -1), newInputValue])
                    }
                    else {
                        // if last value is not operator than add operator
                        setInputValue((prev) => [ ... prev, button]);
                    }
                }
            };

        switch  (button.type){
            case "number":
                handleNumber()
                break;
            case "operator": 
                handleOperator();
                break;
            }
    };

   

  return (
    <>
    <div className='mb-2 px-4'>
        <div className='flex min-h-[9rem] flex-col items-end justify-end py-4 text-right'>
            <span className='w-full text-6xl text-textDark dark:text-white'>
                {result}
            </span>
        </div>
    </div>
    <div className='flex items-center justify-center bg-light-100 px-4 py-2 dark:bg-dark-100'>
            <span className='mr-3 cursor-pointer hover:text-black dark:hover:text-white'>
            <PiArrowUUpLeftBold size={20} />
            </span>
            <div className='flex w-full item-center overflow-x-auto text-2xl font-extralight [&>*:first-child]:ml-auto'>
            {inputValue.map((item, index) => (
                <span>{item.label}</span>
            ))}
            </div>
        </div>
        {/* keyboard */}
        <div className='flex items-center justify-between p-4'> 
            <div className='flex w-full flex-col gap-1 rounded-lg'>
                {
                    Object.keys(Buttons).map((key) => (
                        <div className='grid grid-cols-4 gap-1' key={key}>
                            {Buttons[key].map((item) => (
                               <Button 
                                key={item.value}
                                className={"w-full" + " " + item.className || ""}
                                ref ={(button) => {
                                    buttonsRef.current[item.value] === button;
                                }}
                                onClick={() => handleButtonClick(item.value)}
                               >{item.label}</Button>
                        ))}
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  );
};

export default Calculator
