  'use client';
  import React, { useState, ChangeEvent } from 'react';
  import { ChevronDown } from 'lucide-react';
  import Theme from './theme';
  import Graficos from '@/components/graficos';


  interface CurrencyOption {
    value: string;
    label: string;
    flag: string;
  }

  const currencyOptions: CurrencyOption[] = [
    { value: 'USD', label: 'USD', flag: '🇺🇸' },
    { value: 'BRL', label: 'BRL', flag: '🇧🇷' },
    { value: 'EUR', label: 'EUR', flag: '🇪🇺' },
  ];

  interface CurrencyInputProps {
    currency: CurrencyOption;
    value: string;
    onValueChange?: (value: string) => void;
    onCurrencyChange?: (currency: CurrencyOption) => void;
    readonly?: boolean;
  }

  const CurrencyInput: React.FC<CurrencyInputProps> = ({ currency, value, onValueChange, onCurrencyChange, readonly = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onValueChange) {
        onValueChange(e.target.value);
      }
    };

    const handleCurrencySelect = (option: CurrencyOption) => {
      if (onCurrencyChange) {
        onCurrencyChange(option);
      }
      setIsOpen(false);
    };

    return (
      <div className="relative flex items-center  bg-white rounded-lg shadow-md p-2 w-full max-w-xs">
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Digite o valor"
          readOnly={readonly}
          className="flex-grow text-lg font-semibold text-black outline-none px-2 bg-white"
        />
        <div className="relative">
          <div 
            className="flex items-center bg-white rounded-md px-1 py-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="mr-1">{currency.flag}</span>
            <span className="font-medium">{currency.label}</span>
            <ChevronDown size={16} className="ml-1 text-gray-500" />
          </div>
          {isOpen && (
            <div className="absolute right- mt-1 w-full max-w-xs bg-white border border-gray-200 rounded-md shadow-lg z-20">
              {currencyOptions.map((option) => (
                <div 
                  key={option.value}
                  className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCurrencySelect(option)}
                >
                  <span className="mr-2">{option.flag}</span>
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const CurrencyConverter: React.FC = () => {
    const [fromCurrency, setFromCurrency] = useState(currencyOptions[0]);
    const [toCurrency, setToCurrency] = useState(currencyOptions[1]);
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');

    const handleFromValueChange = (value: string) => {
      setFromValue(value);
    };

    return (
      <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <header className="w-full fixed top-0 left-0 bg-white shadow-md flex justify-between items-center px-8 py-4 z-10">
          <h1 className="text-4xl font-bold text-black">Agência de Câmbio</h1>
          <div>
          <Theme/>
          </div>
        </header>

        <div className="w-full flex justify-start mt-24 pl-16">
          <h2 className="text-2xl text-black font-bold">Conversor de Moedas</h2>
        </div>

        <div className="w-full flex justify-center items-center mt-8 gap-2 space-x-4">
          <CurrencyInput 
            currency={fromCurrency} 
            value={fromValue} 
            onValueChange={handleFromValueChange}
            onCurrencyChange={setFromCurrency}
          />
          <div className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full">
            <svg className="w-4 h-4 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
            </svg>
          </div>
          <CurrencyInput 
            currency={toCurrency} 
            value={toValue} 
            onCurrencyChange={setToCurrency}
            readonly={true}
          />
        </div>

        <div className="flex justify-center items-center mt-12 w-full">
          <Graficos />
        </div>
      </div>
    );
  };

  export default CurrencyConverter;