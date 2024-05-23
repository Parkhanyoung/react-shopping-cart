import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { cartItemsState } from "../../recoil/cartItems";
import { calculateSelectedCartItemsCount } from "../../utils/domain/calculateSelectedCartItemsCount";

export default function PaymentTitle() {
  const cartItems = useRecoilValue(cartItemsState);
  const selectedCartItems = cartItems.filter(({ isSelected }) => isSelected);
  const cartItemsCount = calculateSelectedCartItemsCount(cartItems);

  return (
    <S.Container className="PaymentTitle">
      <S.Title>주문 확인</S.Title>
      <S.InfoWrapper>
        <S.Info>
          총 {selectedCartItems.length}종류의 상품 {cartItemsCount}개를 주문합니다.
        </S.Info>
        <S.Info>최종 결제 금액을 확인해 주세요.</S.Info>
      </S.InfoWrapper>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Title: styled.div`
    font-size: 24px;
    line-height: 34.75px;
    font-weight: 700;
    margin-bottom: 12px;
  `,

  InfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
  `,

  Info: styled.div`
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    color: rgba(10, 13, 19, 1);
    margin: 0;
  `,
};