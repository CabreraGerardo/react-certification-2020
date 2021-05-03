import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import LoginModal from './LoginModal.component';

describe('Modal Component Tests', () => {
  let mockHideModal;
  beforeEach(() => {
    mockHideModal = jest.fn();
  });

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('Modal renders', () => {
    const { container } = render(
      <LoginModal isOpen onClose={mockHideModal}>
        <p>My Modal!</p>
      </LoginModal>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
