
const PaymentItem = (props) => {
    const {
        id,
        price,
        status,
        date
    } = props;

    return (
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">

                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            1000
                        </div>
                        <div class="text-sm text-gray-500">
                            Active
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">11/18/2021</div>
            </td>
        </tr>
    )
}

export default PaymentItem;