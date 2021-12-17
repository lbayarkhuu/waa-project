
const PaymentItem = (props) => {
    const {
        id,
        totalPrice,
        order,
        createdDate
    } = props;
    return (
        <tr key={id}>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{totalPrice}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold">
                    {order.id}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{new Date(createdDate).toLocaleString()}</div>
            </td>
        </tr>
    )
}

export default PaymentItem;