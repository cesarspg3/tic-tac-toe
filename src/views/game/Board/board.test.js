import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';

import Board from './index';

import { Results } from '../../../models';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const boardState = ['-', '-', '-', '-', 'x', '-', '-', '-', 'o'];

describe('Component: Board', () => {
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    beforeEach(() => {
        useDispatchMock.mockClear();
    });

    it('Render Board component and check boxes', () => {
        const wrapper = shallow(<Board boardState={boardState} matchId={'test'} result={Results.CONTINUE} />);
        expect(wrapper).toBeTruthy();
        boardState.forEach((box, index) => {
            const textValue = box === '-' ? '' : box;
            expect(wrapper.find({ id: `box${index}` }).text()).toBe(textValue);
        });
    });
});
