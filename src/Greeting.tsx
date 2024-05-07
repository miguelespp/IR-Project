interface Text{
  title: string;
  name?: string;
}

interface Transaction{
  id: number;
  amount: number;
  description: string;
}
interface TransactionCard{
  transaction: Transaction;
  creditCard: {
    number: number;
    expirationDate: string;
    verificationCode: number;
  }
  mostrar:() => number;
}

export function Greeting({ title, name = 'hola' }: Text) {
  console.log(title);
  console.log(name);
  return <h1>{title}</h1>
}

export function UserCard(Response: Transaction){
  console.log(Response);
  return <ul>
    <li>{Response.id}</li>
    <li>{Response.amount}</li>
    <li>{Response.description}</li>
  </ul>
}

export function TransactionCard({transaction, creditCard, mostrar}: TransactionCard){
  console.log(mostrar());
  return <div>
    <h1>Transaction</h1>
    <ul>
      <li>{transaction.id}</li>
      <li>{transaction.amount}</li>
      <li>{transaction.description}</li>
    </ul>
    <h1>Credit Card</h1>
    <ul>
      <li>{creditCard.number}</li>
      <li>{creditCard.expirationDate}</li>
      <li>{creditCard.verificationCode}</li>
    </ul>
  </div>
}