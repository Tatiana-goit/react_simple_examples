import PropTypes from 'prop-types';
import GoBackHeader from '../Shared/GoBackHeader';
// import TransactionPage from './TransactionPage';

function BalancePage ({closeActivePage,transactions}) {
    return (
    <>
    <GoBackHeader handleGoBack={closeActivePage} title="Баланс за год"/>
    <ul>

        {transactions.map(({date, category, sum, id}) => (
                <li>
                  <span>date</span>
                  <span>2</span>
                  <span>3</span>
              </li>
        ))}
  
    </ul>
    </>)
}

export default BalancePage;

BalancePage.propTypes ={
    closeActivePage: PropTypes.func.isRequired,
    transactions: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        sum: PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
    })).isRequired,

}
