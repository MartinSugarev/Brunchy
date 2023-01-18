import OrderReview from '../components/order/OrderReview';

export default {
    title: 'OrderReview',
    component: OrderReview
}

export const RegularOrderReview = () => <OrderReview  price={0} list={[]}/>;