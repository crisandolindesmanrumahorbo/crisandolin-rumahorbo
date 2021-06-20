import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders Dashboard', () => {
  const wrapper = shallow(<App />);

  const dashboardContainer = wrapper.find('DashboardContainer');

  expect(dashboardContainer.exists()).toBeTruthy();
});
