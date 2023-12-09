import CheckoutTableRow from "../CheckoutTableRow/CheckoutTableRow";
import {TransactionDetailData} from "../../../data/dto/TransactionDetailData";

type Props = {
    transactionDetailData: TransactionDetailData | undefined
}

export default function CheckoutTable({transactionDetailData}: Props) {
    return (
        <>
            <thead>
            <tr>
                <th scope="col" className="h5">Shopping Bag</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Sub-Total</th>
            </tr>
            </thead>
            <tbody>
                {transactionDetailData?.items.map((value) => (
                    <CheckoutTableRow key={value.tpid}
                        transactionProduct={value}/>
                ))}
            </tbody>
        </>
    )
}