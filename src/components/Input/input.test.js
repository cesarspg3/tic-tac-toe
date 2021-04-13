import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input from './index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Render Input component with custom props', () => {
    let test = '';
    const testFn = (value) => {
        test = value;
    };

    const wrapper = shallow(<Input title={'test title'} placeHolder={'test placeholder'} onChange={testFn} />);
    const input = wrapper.find('input');

    expect(input.length).toBe(1);
    expect(input.props().placeholder).toBe('test placeholder');

    expect(wrapper.find('span').at(0).text()).toBe('test title');

    input.simulate('focus');
    input.simulate('change', { target: { value: 'test value' } });
    expect(test).toBe('test value');
});
