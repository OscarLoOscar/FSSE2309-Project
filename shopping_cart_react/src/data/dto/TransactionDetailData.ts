export interface TransactionDetailData {
    tid: number;
    buyer_uid: number;
    datetime: string;
    status: string;
    total: number;
    items: Item[];
}

export interface Item {
    tpid: number;
    product: TransactionProduct;
    quantity: number;
    subtotal: number;
}

export interface TransactionProduct {
    pid: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}
