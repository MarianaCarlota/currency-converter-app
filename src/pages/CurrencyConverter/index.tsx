import { 
  AmountInput, 
  Currency, 
  CurrencyButton, 
  CurrencyConverterContainer, 
  CurrencyOptionsDropdown, 
  FormContainer, 
  InputsContainer 
} from "./styles";
import { CaretDown } from 'phosphor-react'
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { ConversionResults } from "./components/ConversionResults";
import debounce from "lodash/debounce";
import SDK from '@uphold/uphold-sdk-javascript';

export interface ConversionType {
  ask: string,
  bid: string,
  currency: string,
  pair: string
}

export function CurrencyConverter() {
  const currenciesNameList = useMemo(() => 
    ['USD', 'EUR', 'BAT', 'BTC', 'BCH', 'CNY', 'ETH', 'GBP', 'AED', 'HKD', 'ARS'], 
  []);

  const [listOfConversions, setListOfConversions] = useState<ConversionType[]>([])
  const [conversionInputValue, setConversionInputValue] = useState<number | null>()

  const [isDisplayDropdown, setIsDisplayDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [currantCurrency, setCurrantCurrency] = useState<string>(() => {
    return localStorage.getItem("currantCurrency") || "USD";
  });

  function toggleCurrencyButton() {
    setIsDisplayDropdown(!isDisplayDropdown);
  }

  const fetchConversionData = useMemo(() => {
    const sdk = new SDK({
      baseUrl: 'http://api-sandbox.uphold.com',
      clientId: 'foo',
      clientSecret: 'bar'
    });

    return debounce((currency: string) => {
      sdk.getTicker(currency)
        .then((data: ConversionType[]) => data
        .filter((currencyData: ConversionType) => currencyData.currency !== currency)
        .filter((currencyData: ConversionType) => 
          currenciesNameList.includes(currencyData.currency
          ))
        )
        .then((data: ConversionType[]) => setListOfConversions(data))
        .catch((error: Error) => console.error('Error fetching data:', error));
    }, 500);
  }, [currenciesNameList]);

  useEffect(() => {
    fetchConversionData(currantCurrency);
  }, [currantCurrency, fetchConversionData]);

  function handleSetCurrantCurrency(currency: string) {
    setCurrantCurrency(currency);
    localStorage.setItem("currantCurrency", currency);
    toggleCurrencyButton();
  }

  function handleConversionValueChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const normalizedValue = inputValue.replace(',', '.');
    const parsedValue = parseFloat(normalizedValue);
    if (!isNaN(parsedValue)) {
      setConversionInputValue(parsedValue);
      localStorage.setItem('conversionInputValue', parsedValue.toString());
    } else {
      setConversionInputValue(null);
      localStorage.removeItem('conversionInputValue');
    }
  }

  useEffect(() => {
    const savedInputValue = localStorage.getItem('conversionInputValue');
    if (savedInputValue) {
      setConversionInputValue(Number(savedInputValue));
    }
  }, []);

  function displayOtherCurrencyOptions() {
    return currenciesNameList.filter((option) => option !== currantCurrency);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDisplayDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <CurrencyConverterContainer>
      <FormContainer>
        <h2>Currency Converter</h2>
        <p>Receive competitive and transparent pricing with no hidden spreads. See how we compare.</p>
        <InputsContainer>
          <AmountInput 
            placeholder="0.00" 
            value={conversionInputValue ?? ''} 
            onChange={handleConversionValueChange} 
            type="number" 
          />
          <CurrencyButton>
            <button onClick={toggleCurrencyButton}>
              <img src={`/assets/${currantCurrency.toLowerCase()}-flag-logo.png`} alt="currency icon" />
              <span>{currantCurrency}</span>
              <CaretDown size={12} weight="fill" color="grey" />
            </button>
            {isDisplayDropdown ? 
            <CurrencyOptionsDropdown ref={dropdownRef}>
              {displayOtherCurrencyOptions().map((currency) => {
                return (
                  <Currency key={currency}>
                    <button onClick={() => handleSetCurrantCurrency(currency)}>
                      <img src={`/assets/${currency.toLowerCase()}-flag-logo.png`} alt="currency icon" />
                      <span>{currency}</span>
                    </button>
                  </Currency>
                )
              })}
            </CurrencyOptionsDropdown> : <></>
            }
          </CurrencyButton>
        </InputsContainer>
        <ConversionResults 
          listOfConversions={listOfConversions} 
          conversionInputValue={conversionInputValue} 
        />
      </FormContainer>
    </CurrencyConverterContainer>
  )
}