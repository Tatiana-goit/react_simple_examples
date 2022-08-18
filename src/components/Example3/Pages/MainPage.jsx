import MainInfo from "../MainInfo/MainInfo";
import StatisticBtns from "../StatisticBtns/StatisticBtns";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../data/data/mainInfoOptions.json";

function MainPage({ openActivePage }) {
  return (
    <section>
      <h1>Журнал расходов</h1>
      <MainInfo
        openActivePage={openActivePage}
        options={mainInfoCosts}
        title="Расходы"
        activePage="costs"
      />
      <MainInfo
        openActivePage={openActivePage}
        options={mainInfoIncomes}
        title="Доходы"
        activePage="incomes"
      />
      <MainInfo
        openActivePage={openActivePage}
        options={mainInfoBalance}
        title="Баланс"
        activePage="balance"
      />

      <StatisticBtns></StatisticBtns>
    </section>
  );
}

export default MainPage;
