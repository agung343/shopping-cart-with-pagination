interface Props {
    amount: number
}

export default function CurrencyFormater({amount}: Props) {
    const formattedAmount = amount.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDN"
    })

    return <span style={{fontWeight: 700}}>
        {formattedAmount}
    </span>
}