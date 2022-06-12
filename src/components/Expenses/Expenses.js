import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import "./Expenses.css"
function Expenses(props){
    return(
        <Card className='expenses'>
            <ExpenseItem
                date= {props.expense[0].date}
                description={props.expense[0].title}
                price={props.expense[0].amount}
            ></ExpenseItem>
            <ExpenseItem
                date= {props.expense[1].date}
                description={props.expense[1].title}
                price={props.expense[1].amount}
            ></ExpenseItem>
            <ExpenseItem
                date= {props.expense[2].date}
                description={props.expense[2].title}
                price={props.expense[2].amount}
            ></ExpenseItem>
            <ExpenseItem
                date= {props.expense[3].date}
                description={props.expense[3].title}
                price={props.expense[3].amount}
            ></ExpenseItem>
        </Card>
    )
}
export default Expenses;