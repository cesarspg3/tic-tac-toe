import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';

import Board from './Board';
import Game from './index';
import Header from './Header';
import Loading from '../../components/Loading';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Component: Game', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
    });

    it('Render Game component', () => {
        useSelectorMock.mockReturnValue({
            matchId: 'i6xzj6hzqsuwidjvza2ri9ice978yr7v',
            boardState: ['-', '-', '-', '-', 'x', '-', '-', '-', 'o'],
            turn: 'User',
            result: 'continue',
        });
        const wrapper = shallow(<Game />);
        expect(wrapper).toBeTruthy();
        expect(wrapper.find(Board).length).toBe(1);
        expect(wrapper.find(Header).length).toBe(1);
        expect(wrapper.find({ id: 'repalyBtn' }).text()).toBe('Vuleve a Jugar');
    });

    it('Test loading component', () => {
        useSelectorMock.mockReturnValue({
            loading: true,
            error: false,
        });

        const wrapper = shallow(<Game />);
        expect(wrapper.find(Loading).length).toBe(1);
    });
});
