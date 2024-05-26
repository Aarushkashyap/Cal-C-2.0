import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineSwap } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import { IoBackspaceOutline } from "react-icons/io5";
import Button from './Button';


const convertors = [
    {
        name: "Length",
        units: [
            {
                name: "Millimeter",
                value: 0.001,
                unit: "mm",
            },
            {
                name: "Centimeter",
                value: 0.01,
                unit: "cm",
            },
            {
                name: "Meter",
                value: 1,
                unit: "m",
            },
            {
                name: "Kilometer",
                value: 1000,
                unit: "km",
            },
            {
                name: "Inch",
                value: 0.0254,
                unit: "in",
            },
            {
                name: "Foot",
                value: 0.3048,
                unit: "ft",
            },
            {
                name: "Yard",
                value: 0.9144,
                unit: "yd",
            },
            {
                name: "Mile",
                value: 1609.344,
                unit: "mi",
            },
        ],
    },
    {
        name: "Area",
        units: [
            {
                name: "Square Millimeter",
                value: 0.000001,
                unit: "mm²",
            },
            {
                name: "Square Centimeter",
                value: 0.0001,
                unit: "cm²",
            },
            {
                name: "Square Meter",
                value: 1,
                unit: "m²",
            },
            {
                name: "Square Kilometer",
                value: 1000000,
                unit: "km²",
            },
            {
                name: "Square Inch",
                value: 0.00064516,
                unit: "in²",
            },
            {
                name: "Square Foot",
                value: 0.09290304,
                unit: "ft²",
            },
            {
                name: "Square Yard",
                value: 0.83612736,
                unit: "yd²",
            },
            {
                name: "Square Mile",
                value: 2589990,
                unit: "mi²",
            },
            {
                name: "Hectare",
                value: 10000,
                unit: "ha",
            },
            {
                name: "Acre",
                value: 4046.8564224,
                unit: "ac",
            },
        ],
    },
    {
        name:"Volume",
        units: [
            {
                name: "Milliliter",
                value: 0.001,
                unit: "ml",
            },
            {
                name: "Liter",
                value: 1,
                unit: "l",
            },
            {
                name: "Cubic Meter",
                value: 1000,
                unit: "m³",
            },
            {
                name: "Cubic Inch",
                value: 0.016387064,
                unit: "in³",
            },
            {
                name: "Cubic Foot",
                value: 28.32,
                unit: "ft³",
            },
            {
                name: "Cubic Yard",
                value: 764.55,
                unit: "yd³",
            },
            {
                name: "Fluid Ounce",
                value: 0.03,
                unit: "fl oz",
            },
            {
                name: "cup",
                value: 0.24,
                unit: "cup",
            },
            {
                name: "Pint",
                value: 0.47,
                unit: "pt",
            },
            {
                name: "Quart",
                value: 0.95,
                unit: "qt",
            },
            {
                name: "Gallon",
                value: 3.79,
                unit: "gal",
            },
            {
                name: "Barrel",
                value: 119.24,
                unit: "bbl",
            },
        ],
    },
    {
        name: "Mass",
        units: [
            {
                name: "Milligram",
                value: 0.000001,
                unit: "mg",
            },
            {
                name: "Gram",
                value: 0.001,
                unit: "g",
            },
            {
                name: "Kilogram",
                value: 1,
                unit: "kg",
            },
            {
                name: "Metric Ton",
                value: 1000,
                unit: "t",
            },
            {
                name: "Ounce",
                value: 0.03,
                unit: "oz",
            },
            {
                name: "P",
                value: 0.45359237,
                unit: "lb",
            },
        ],
    },
    {
        name: "Speed",
        units: [
            {
                name: "Meter/Second",
                value: 1,
                unit: "m/s",
            },
            {
                name: "Kilometer/Hour",
                value: 0.28,
                unit: "km/h",
            },
            {
                name: "Mile/Hour",
                value: 0.44704,
                unit: "mi/h",
            },
            {
                name: "Knots",
                value: 0.51,
                unit: "kn",
            },
        ],
    },
    {
        name: "Time",
        units: [
            {
                name: "Second",
                value: 1,
                unit: "s",
            },
            {
                name: "Minute",
                value: 60,
                unit: "min",
            },
            {
                name: "Hour",
                value: 3600,
                unit: "h",
            },
            {
                name: "Day",
                value: 86400,
                unit: "d",
            },
            {
                name: "Week",
                value: 604800,
                unit: "week",
            },
            {
                name: "Month",
                value: 2629800,
                unit: "month",
            },
            {
                name: "Year",
                value: 31557600,
                unit: "year",
            },
        ]
    },
    {
        name: "Temperature",
        units: [
            {
                name: "Celsius",
                value: 1,
                unit: "°C",
            },
            {
                name: "Fahrenheit",
                value: 0.55555555555556,
                unit: "°F",
            },
            {
                name: "Kelvin",
                value: 274.15,
                unit: "K",
            },
        ],
    },
    {
        name: "Digital Storage",
        units: [
            {
                name: "Bit",
                value: 0.000000125,
                unit: "b",
            },
            {
                name: "Byte",
                value: 0.000001,
                unit: "B",
            },
            {
                name: "Kilobit",
                value: 0.000125,
                unit: "kb",
            },
            {
                name: "KiloByte",
                value: 0.001,
                unit: "kB",
            },
            {
                name: "Megabit",
                value: 0.125,
                unit: "mb",
            },
            {
                name: "Megabyte",
                value: 1,
                unit: "MB",
            },
            {
                name: "Gigabit",
                value: 125,
                unit: "Gb",
            },
            {
                name: "Gigabyte",
                value: 1000,
                unit: "GB",
            },
            {
                name: "Terabit",
                value: 125000,
                unit: "Tb",
            },
            {
                name: "Terabyte",
                value: 1000000,
                unit: "TB",
            },
            {
                name: "Petabit",
                value: 125000000,
                unit: "Pb",
            },
            {
                name: "Petabyte",
                value: 1000000000,
                unit: "PB",
            },
        ],
    },
    {
        name:"Energy",
        units:[
            {
                name:"Joule",
                value:1,
                unit:"J",
            },
            {
                name:"Kilojoule",
                value:1000,
                unit:"kJ",
            },
            {
                name:"Calorie",
                value:4.184,
                unit:"cal",
            },
            {
                name:"Kilocalorie",
                value:4184,
                unit:"kcal",
            },
            {
                name:"Watt hour",
                value:3600,
                unit:"Wh",
            },
            {
                name:"Kilo Watt hour",
                value:3600000,
                unit:"kWh",
            },
            {
                name:"electron Volt",
                value:0.00000000000000000016021766208,
                unit:"ev",
            },
        ],
    },
    {
        name:"Pressure",
        units: [
            {
                name: "Pascal",
                value: 1,
                unit: "Pa",
            },
            {
                name: "Kilopascal",
                value: 1000,
                unit: "kPa",
            },
            {
                name: "Bar",
                value: 100000,
                unit: "bar",
            },
            {
                name: "Pound per square Inch",
                value: 6894.757293168,
                unit: "psi",
            },
            {
                name: "Atmosphere",
                value: 101325,
                unit: "atm",
            },
            {
                name: "Torr",
                value: 133.3223684,
                unit: "torr",
            },
        ],
    },
]

const Buttons = {
    row1: [
        {
            value: "AC",
            label: "AC",
            className: "bg-light-300 dark:bg-dark-300 flex-1 !h-[60px]",
            type: "clear",
        },
        {
            value: "swap",
            label: <AiOutlineSwap size={25}/>,
            className: "bg-light-300 dark:bg-dark-300 flex-1 !h-[60px]",
            type: "swap",
        },
    ],
    row2: [
        {value: "7", label: "7", type: "number"},
        {value: "8", label: "8", type: "number"},
        {value: "9", label: "9", type: "number"},
    ],
    row3: [
        {value: "4", label: "4", type: "number"},
        {value: "5", label: "5", type: "number"},
        {value: "6", label: "6", type: "number"},
    ],
    row4: [
        {value: "1", label: "1", type: "number"},
        {value: "2", label: "2", type: "number"},
        {value: "3", label: "3", type: "number"},
    ],
    row5: [
        {value: "0", label: "0", type: "number"},
        {value: ".", label: <LuDot size={25} />, type: "dot"},
        {
            value: "Backspace",
            label: <IoBackspaceOutline  size={25}/>,
            type: "Backspace",
        }
    ]
}

const Converter = () => {


    const [selectedConverter, setSelectedConverter] = useState(0);
    const [selectedUnits, setSelectedUnits] = useState([
        convertors[selectedConverter].units[0],
        convertors[selectedConverter].units[1],
    ]);
        const [values, setValues] = useState([0, 0]);
        const [focusedInput, setFocusedInput] = useState(0);
        const buttonsRef = useRef([]);
        const handleConverterChange = (index) => {
            setSelectedConverter(index);
            setSelectedUnits (
                [convertors[index].units[0],
                convertors[index].units[1]]
            );
            setValues([0,0]);
        }

        const handleUnitChange = (index, unitIndex) => {
            // handle unit change 
            let prevSelectedUnits = [...selectedUnits];
            // update selected unit
            prevSelectedUnits[index] = convertors[selectedConverter].units[unitIndex]
            setSelectedUnits(prevSelectedUnits);

            let value = (values[index] * selectedUnits[index].value) / prevSelectedUnits[index].value;

            if(value.toString().split(".")[0]?.length >8) {
                value = value.toFixed(2)
            }
            value = value || 0;
            let prevValues = [...values]
            prevValues[index] = value;
            setValues(prevValues);
        }

        const handleValueChange = (index, value) => {
            if (value.endsWith(".")) {
                let prevValues = [...values];
                prevValues[index] = value;
                setValues(prevValues);
                return;
            }
            value = parseFloat(value) || 0; // Convert to number only if it is not just a decimal point
            let prevValues = [...values];
            prevValues[index] = value.toString();
        
            let otherValue = (value * selectedUnits[index].value) / selectedUnits[1 - index].value;
        
            if (otherValue.toString().split(".")[0]?.length > 8) {
                otherValue = otherValue.toFixed(2);
            }
        
            otherValue = otherValue || 0;
        
            prevValues[1 - index] = otherValue.toString();
            setValues(prevValues);
        }

        const handleSwapValues = () => {
            let prevValues = [...values];
            prevValues.reverse();
            setValues(prevValues);
            // let prevSelectedUnits = [...selectedUnits];
            // prevSelectedUnits.reverse();
            // setSelectedUnits(prevSelectedUnits);
        }

        const handleButtonClick = (value) => {
            let prevValues = [...values];
            switch(value) {
                case "AC":
                    prevValues = [0,0];
                    break;
                case "swap":
                    handleSwapValues();
                    break;
                case "Backspace":
                    // remove last character from focused input 
                    prevValues[focusedInput] = (prevValues[focusedInput]+ "").slice(0, -1) || 0;  
                    // if last character is dot remove it also
                    if(prevValues[focusedInput].toString().slice(-1)==="."){
                        prevValues[focusedInput]=(prevValues[focusedInput]+"").slice(
                            0, 
                            -1
                        );
                    }       
                    break;  
                case "." : 
                    if(!prevValues[focusedInput].toString().includes(".")) {
                        // if dot not already exists add one
                        prevValues[focusedInput] += ".";
                    }
                    break;
                default:
                    prevValues[focusedInput] += value;
                    prevValues[focusedInput] = prevValues[focusedInput] || 0;
                    break;
            }

            if(value != "swap"){
                setValues(prevValues);
                handleValueChange(focusedInput, prevValues[focusedInput]);
            }
        }

        
    const handleKeyButtonPress = (btn) => {
        buttonsRef.current[btn].click();
        // add a click animation 
        buttonsRef.current[btn].classList.add("ring-2", "ring-purple-400");
        //remove after 2ms
        setTimeout(() => {
            buttonsRef.current[btn].classList.remove("ring-2", "ring-purple-400");
        }, 200);
    };

    const handleKeyPress = (e) => {
        if(buttonsRef.current[e.key]) {
            // if pressed key is from buttons
            handleKeyButtonPress(e.key);
        }

        if(e.key === "ArrowUp") {
            setFocusedInput(0);
        }
        if(e.key === "ArrowDown") {
            setFocusedInput(1);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress); 
        };
    }, []);

    return (
    <div className='w-full '>
      <div className='m-auto mb-8 w-max'>
        <select className='border-none bg-transparent text-sm outline-none focus:text-black 
        dark:focus:text-white'
            defaultValue={selectedConverter}
            onChange={(e)=> handleConverterChange(e.target.value)}
        >
            {
                convertors.map((convertor, index) => (
                    <option 
                    key={index} 
                    value={index} 
                    className='bg-light-100 dark:bg-dark-100'
                    >
                        {convertor.name}
                    </option>
                ))}
        </select>
      </div>
            <div className="min-h-[154px] px-4">
                <div className='mb-5 flex items-center gap-5'>
                    <input 
                    type="number" 
                    className={`w-full border-b border-dashed bg-transparent p-1 text-4xl
                    font-light outline-none dark:text-white
                    ${focusedInput === 0 
                        ? "border-black dark:border-white" 
                        : "border-light-300 dark:border-dark-300"

                    }
                    `} 
                    placeholder='0'
                    value={values[0]}
                    readOnly
                    onChange={(e) => handleValueChange(0, e.target.value)}
                    onClick={() => setFocusedInput(0)}
                    />
                        <select className='border-none bg-transparent text-sm outline-none focus:text-black
                         dark:focus:text-white' 
                         
                            defaultValue={0}
                            onChange={(e)=> handleUnitChange(0, e.target.value)}
                         
                         >
                            {convertors[selectedConverter].units.map((unit, index) => (
                                <option 
                                    key={index}
                                    value={index}
                                    className='bg-light-100 dark:bg-dark-100'
                                    >
                                        {unit.unit}
                                    </option>
                                ))
                            }
                         </select>
                </div> 
                <div className=' flex items-center gap-5'>
                    <input 
                    type="number" 
                    className={`w-full border-b border-dashed bg-transparent p-1 text-4xl
                    font-light outline-none dark:text-white
                    ${focusedInput === 1 
                        ? "border-black dark:border-white" 
                        : "border-light-300 dark:border-dark-300"

                    }
                    `} 
                    placeholder='0'
                    value={values[1]}
                    readOnly
                    onChange={(e) => handleValueChange(1, e.target.value)}
                    onClick={() => setFocusedInput(1)}
                    />
                        <select className='border-none bg-transparent text-sm outline-none focus:text-black
                         dark:focus:text-white' 
                         
                            defaultValue={1}
                            onChange={(e)=> handleUnitChange(1, e.target.value)}
                         
                         >
                            {convertors[selectedConverter].units.map((unit, index) => (
                                <option 
                                    key={index}
                                    value={index}
                                    className='bg-light-100 dark:bg-dark-100'
                                    >
                                        {unit.unit}
                                    </option>
                                ))
                            }
                         </select>
                </div>
            </div>

            {/* keyboard */}
            <div className='flex items-center justify-between p-4'>
                <div className='flex w-full flex-col gap-1 rounded-lg'>
                    {
                        Object.keys(Buttons).map((key) => (
                            <div className='flex gap-1' key={key}>
                                {
                                    Buttons[key].map((item) => (
                                        <Button
                                            key={item.value}
                                            className={"w-full" + " " + item.className || ""}
                                            onClick ={() => handleButtonClick(item.value)}
                                            ref = {(button) => {
                                                buttonsRef.current[item.value] = button;
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
    </div>
  )
}

export default Converter
