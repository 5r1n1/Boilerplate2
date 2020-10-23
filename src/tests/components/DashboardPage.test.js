import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import DashboardPage from '../../components/DashboardPage';

describe('Testing DashboardPage Component...', () => {
  test('should render DashboardPage...', async() => {
    const wrapper = shallow(<DashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
