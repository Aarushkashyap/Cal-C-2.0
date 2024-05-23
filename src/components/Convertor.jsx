import React from 'react'

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
                value: 0.000001,
                unit: "B",
            },
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
        name: "Pressure",
        units: [
            {
                name: "Pascal",
                value: 1,
                units: "Pa",
            },
            {
                name: "Kilopascal",
                value: 1000,
                units: "kPa",
            },
            {
                name: "Bar",
                value: 100000,
                units: "bar",
            },
            {
                name: "Pound per square Inch",
                value: 6894.757293168,
                units: "psi",
            },
            {
                name: "Atmosphere",
                value: 101325,
                units: "atm",
            },
            {
                name: "Torr",
                value: 133.3223684,
                units: "torr",
            },
        ],
    },
]


const Converter = () => {
  return (
    <div className='w-full '>
      <div className='m-auto mb-8 w-max'>
        <select className='border-none bg-transparent text-sm outline-none focus:text-black 
        dark:focus:text-white'>
            {
                convertors.map((convertor, index) => (
                    <option 
                    key={index} 
                    value={index} 
                    className='bg-light-100 dark:bg-dark-100'
                    >
                        {convertor.name}
                    </option>
                ))
            }
        </select>
      </div>
    </div>
  )
}

export default Converter
