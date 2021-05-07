import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Header from './index';

import { Players, Results } from '../../../models';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Component: Header', () => {
    it('Render Header component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toBeTruthy();
    });

    it('Tie', () => {
        const wrapper = shallow(<Header result={Results.TIE} />);
        expect(wrapper.find({ id: 'result' }).text()).toBe('¡HAS EMPATADO!');
    });

    it('Lose', () => {
        const wrapper = shallow(<Header result={Results.LOSE} />);
        expect(wrapper.find({ id: 'result' }).text()).toBe('¡HAS PERDIDO!');
    });

    it('win', () => {
        const wrapper = shallow(<Header result={Results.WIN} />);
        expect(wrapper.find({ id: 'result' }).text()).toBe('¡HAS GANADO!');
    });

    it('player turn', () => {
        const wrapper = shallow(<Header result={Results.CONTINUE} turn={Players.USER} />);
        expect(wrapper.find({ id: 'turn' }).text()).toBe('Es tu turno');
    });

    it('machine turn', () => {
        const wrapper = shallow(<Header result={Results.CONTINUE} turn={Players.MACHINE} />);
        expect(wrapper.find({ id: 'turn' }).text()).toBe('Espera a tu turno...');
    });
});
