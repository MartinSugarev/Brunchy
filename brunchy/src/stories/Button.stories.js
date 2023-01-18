import Button from '../components/button/Button';

export default {
    title: 'Button',
    component: Button
}

export const Regular = () => <Button type="regular" text="Press me" />;
export const Active = () => <Button type="active" text="Press me" />