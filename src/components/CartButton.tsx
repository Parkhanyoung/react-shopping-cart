import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../constants/routePath";
import Button from "./common/Button";
import { useRecoilValue } from "recoil";
import { selectedCartItemIdsState } from "../recoil/selectedCartItemIds";

export default function CartButton() {
  const navigate = useNavigate();
  const selectedCartItemIds = useRecoilValue(selectedCartItemIdsState);
  const isDisabled = selectedCartItemIds.length === 0;

  const handleOrderConfirmButtonClick = () => {
    navigate(ROUTE_PATH.orderSummary);
  };

  return (
    <Button disabled={isDisabled} onClick={handleOrderConfirmButtonClick}>
      주문 확인
    </Button>
  );
}
