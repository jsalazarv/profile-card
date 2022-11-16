import { act, render } from '@testing-library/react';
import React, { createRef, Fragment, StrictMode, useEffect } from 'react';

export function renderHook(renderCallback, options = {}) {
  const { initialProps, wrapper, strict = true } = options;
  const Wrapper = strict ? StrictMode : Fragment;
  const result = createRef();

  function TestComponent({ renderCallbackProps }) {
    const pendingResult = renderCallback(renderCallbackProps);

    useEffect(() => {
      result.current = pendingResult;
    });

    return null;
  }

  const { rerender: baseRerender, unmount } = render(
    <Wrapper>
      <TestComponent renderCallbackProps={initialProps} />
    </Wrapper>,
    { wrapper },
  );

  function rerender(rerenderCallbackProps) {
    return baseRerender(
      <Wrapper>
        <TestComponent renderCallbackProps={rerenderCallbackProps} />
      </Wrapper>,
    );
  }

  return { result, rerender, unmount };
}
export { act };
