import OrderListItem from '../components/order/OrderListItem';

export default {
    title: 'OrderListItem',
    component: OrderListItem
}

export const RegularOrderListItem = () => <OrderListItem name="Avocado Toast" price={2}  />;