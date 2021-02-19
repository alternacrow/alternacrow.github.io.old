import React, { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import { color } from '../../../assets/styles';

import { Modal } from './modal';

export const ModalSample: FC = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClickModalButton = useCallback(() => {
    setVisible(true);
  }, []);

  const handleClickBlur = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <Button type="button" onClick={handleClickModalButton}>
        open modal
      </Button>
      <Modal visible={isVisible} onClickBlur={handleClickBlur}>
        <ModalInner>
          <CloseButton className="fa fa-times-circle" />
          <Title>Modal</Title>
          <Description>This is Modal!!</Description>
        </ModalInner>
      </Modal>
    </>
  );
};

const Button = styled.button`
  border-radius: 6px;
  background-color: ${color.primary};
  padding: 6px 12px;
  color: ${color.white};
  text-align: center;
`;

const ModalInner = styled.div`
  position: relative;
  margin: auto;
  max-width: 360px;
  width: calc(100vw - 16px);
  max-height: 420px;
  height: calc(100vh - 16px);
  border-radius: 12px;
  background-color: #ffffff;
  padding: 32px 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(40%) translateY(-40%);
  font-size: 50px;
  color: ${color.gray};
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.p`
  margin-top: 48px;
  font-size: 16px;
  text-align: center;
`;
