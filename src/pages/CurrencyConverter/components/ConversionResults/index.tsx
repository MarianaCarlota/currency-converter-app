import { ConversionType } from "../..";
import { CurrencyConversionContainer, CurrencyConversionItem, CurrencyName } from "./styles"

interface CurrencyConversionprops {
  conversionInputValue?: number | null;
  listOfConversions: ConversionType[];
}

export function ConversionResults({conversionInputValue, listOfConversions}: CurrencyConversionprops) {
  function displayCurrencyConversion(rate: string) {
    return Number(rate) * Number(conversionInputValue);
  }
  
  return (
    <CurrencyConversionContainer>
      {conversionInputValue ?
        listOfConversions.map((conversion) => {
          return (
            <CurrencyConversionItem key={conversion.currency}>
              <span>{ displayCurrencyConversion(conversion.ask).toFixed(6)}</span>
              <CurrencyName>
                <img src={`/assets/${conversion.currency.toLowerCase()}-flag-logo.png`} alt="" /> 
                <span>{conversion.currency}</span>
              </CurrencyName>
            </CurrencyConversionItem>
          )
        }) :
        (<p>Enter an amount to check the rates.</p>)
      }
    </CurrencyConversionContainer>
  )
}