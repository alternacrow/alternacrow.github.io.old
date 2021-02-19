import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { color } from '../../../assets/styles';

type Props = {
  visible: boolean;
  onClickBlur?: () => void;
};

export const Modal: FC<Props> = ({
  visible,
  onClickBlur = () => undefined,
  children,
}) => {
  const cancelEmitParentEvent = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    [],
  );
  return (
    <Container visible={visible} onClick={onClickBlur}>
      <ModalWrapper onClick={cancelEmitParentEvent}>{children}</ModalWrapper>
    </Container>
  );
};

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.blur};
  transition: all 0.5s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  z-index: ${({ visible }) => (visible ? 1001 : -1)};
`;

const ModalWrapper = styled.div``;
