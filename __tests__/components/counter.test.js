import React from 'react';
import renderer, { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Counter from '../../components/counter';

describe('Counter', () => {
    let component = null;
    let instance = null;

    it('renders correctly', () => {
        component = create(<Counter />);
        instance = component.root;
    });

    it('H1 text check', () => {
        // enzyme
        // const app = shallow(<Counter />)
        // expect(app.find('h1').text()).toEqual('카운터')

        // test renderer
        const h1Text = instance.children;
        expect(h1Text).toEqual('카운터');
    });

    it('matches snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('increase correctly', () => {
        component.root.getInstance().onIncrease();
        expect(component.getInstance().state.value).toBe(2);
    })
});