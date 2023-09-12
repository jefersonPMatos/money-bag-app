export interface TransactionsProps {
  id: number;
  title: string;
  subTitle: string;
  amount: string;
  date: string;
  art: {
    icon: string;
    background: string;
  };
}

export interface TransactionSectionProps {
  data: Array<TransactionsProps>;
}

export interface TransactionAviProps {
  icon: string;
  background: string;
}
