export interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface Flower {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

export interface FlowerListProps {
    flowers?: Flower[];
}

export interface BestSellersSectionProps {
    flowers: Flower[];
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface CartState {
    items: CartItem[];
    totalAmount: number;
}

export interface FlowerState {
    flowers: Flower[];
}
