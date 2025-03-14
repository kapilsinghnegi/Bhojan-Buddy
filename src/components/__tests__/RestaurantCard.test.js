import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/mockRestaurantCard.json';

it('Renders RestaurantCard component with props data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText('Pizza Hut');
  expect(resName).toBeInTheDocument();
});
