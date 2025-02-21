import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CurrencyConverter } from './index';

jest.mock('@uphold/uphold-sdk-javascript', () => {
  return jest.fn().mockImplementation(() => ({
    getTicker: jest.fn(() =>
      Promise.resolve([
        { currency: 'EUR', ask: '1.2', bid: '1.1', pair: 'USDEUR' },
        { currency: 'GBP', ask: '1.3', bid: '1.2', pair: 'USDGBP' },
      ])
    ),
  }));
});

beforeEach(() => {
  localStorage.clear();
});

describe('CurrencyConverter', () => {
  test('renders CurrencyConverter component and basic UI elements', () => {
    render(<CurrencyConverter />);
    expect(screen.getByText('Currency Converter')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
  });

  test('toggles currency dropdown on button click', () => {
    render(<CurrencyConverter />);
    
    const button = screen.getByText('USD');
    fireEvent.click(button);

    const dropdown = screen.getByText('EUR');
    expect(dropdown).toBeInTheDocument();
  });

  test('updates currency and localStorage correctly', () => {
    render(<CurrencyConverter />);
    
    const button = screen.getByText('USD');
    fireEvent.click(button);

    const eurButton = screen.getByText('EUR');
    fireEvent.click(eurButton);

    expect(screen.getByText('EUR')).toBeInTheDocument();
    
    expect(localStorage.getItem('currantCurrency')).toBe('EUR');
  });
});
