import CardContainer from '../components/card/CardContainer';

const items = [
    {image: "/Asset 5.png", name: "Avocado Toast", caption:"With", price: 0},
    {image: "/Asset 5.png", name: "Avocado Toast", caption:"With", price: 0},
    {image: "/Asset 5.png", name: "Avocado Toast", caption:"With", price: 0},
    {image: "/Asset 5.png", name: "Avocado Toast", caption:"With", price: 0}

]

export default {
    title: 'CardContainer',
    component: CardContainer
}

export const RegularCard = () => <CardContainer items={items} />;