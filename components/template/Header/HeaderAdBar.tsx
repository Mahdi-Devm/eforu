import AdBar from "../../Module/ui/AdBar";

type Props = {
  visible: boolean;
};

const HeaderAdBar = ({ visible }: Props) => {
  return <AdBar visible={visible} />;
};

export default HeaderAdBar;
