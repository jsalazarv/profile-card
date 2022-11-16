import { renderHook, act } from '../utils/render-hook.jsx';
import useTheme from '../../src/hooks/useTheme.js';

describe('useTheme [Hook]', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Should return the expected properties', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toContainAllKeys([
      'theme',
      'setDarkTheme',
      'setLightTheme',
      'toggleTheme',
      'isDark',
      'isLight',
    ]);
  });

  describe('Init', () => {
    test('Should have [dark] value by default if not param is given', () => {
      const { result } = renderHook(() => useTheme());
      const { theme } = result.current;

      expect(theme).toBe('dark');
    });

    test('Should have [light] value by if param is given', () => {
      const { result } = renderHook(() => useTheme('light'));
      const { theme } = result.current;

      expect(theme).toBe('light');
    });
  });

  describe('setDarkTheme', () => {
    test('Should change theme value if function is called', () => {
      const { result } = renderHook(() => useTheme('light'));

      act(() => {
        result.current.setDarkTheme();
      });

      expect(result.current.theme).toBe('dark');
    });

    test('Should not change to light theme if setDarkTheme is called', () => {
      const { result } = renderHook(() => useTheme('dark'));

      act(() => {
        result.current.setDarkTheme();
      });

      expect(result.current.theme).toBe('dark');
    });
  });

  describe('setLightTheme', () => {
    test('Should change theme value if function is called', () => {
      const { result } = renderHook(() => useTheme('dark'));

      act(() => {
        result.current.setLightTheme();
      });

      expect(result.current.theme).toBe('light');
    });

    test('Should not change to dark theme if setLightTheme is called', () => {
      const { result } = renderHook(() => useTheme('light'));

      act(() => {
        result.current.setLightTheme();
      });

      expect(result.current.theme).toBe('light');
    });
  });

  describe('toggleTheme', () => {
    test('Should set dark theme', () => {
      const { result } = renderHook(() => useTheme('light'));

      act(() => {
        result.current.toggleTheme();
      });

      expect(result.current.theme).toBe('dark');
    });

    test('Should set light theme', () => {
      const { result } = renderHook(() => useTheme('dark'));

      act(() => {
        result.current.toggleTheme();
      });

      expect(result.current.theme).toBe('light');
    });
  });

  describe('DOM manipulation', () => {
    const root = window.document.documentElement;

    jest.spyOn(root.classList, 'remove').mockImplementation(jest.fn());
    jest.spyOn(root.classList, 'add').mockImplementation(jest.fn());

    test('Should remove dark theme class when theme changes', () => {
      const { result } = renderHook(() => useTheme('dark'));

      act(() => {
        result.current.toggleTheme();
      });

      expect(root.classList.remove).toHaveBeenCalledWith('dark');
      expect(root.classList.add).toHaveBeenCalledWith('light');
    });

    test('Should remove light theme class when theme changes', () => {
      const { result } = renderHook(() => useTheme('light'));

      act(() => {
        result.current.toggleTheme();
      });

      expect(root.classList.remove).toHaveBeenCalledWith('light');
      expect(root.classList.add).toHaveBeenCalledWith('dark');
    });

    test('Should remove theme by default when theme changes', () => {
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current.toggleTheme();
      });

      expect(root.classList.remove).toHaveBeenCalledWith('dark');
      expect(root.classList.add).toHaveBeenCalledWith('light');
    });

    test('Should save theme in local storage when changes', () => {
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current.toggleTheme();
      });

      expect(localStorage.setItem).toHaveBeenCalledWith(
        'ui:theme',
        result.current.theme,
      );
    });

    test('Should change theme when clicked', () => {
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current.toggleTheme();
      });
      expect(result.current.theme).toEqual('light');

      act(() => {
        result.current.toggleTheme();
      });
      expect(result.current.theme).toEqual('dark');
    });
  });

  describe('flags', () => {
    test('Should return TRUE if the is light', () => {
      const { result } = renderHook(() => useTheme('light'));

      expect(result.current.isDark).toBeFalse();
      expect(result.current.isLight).toBeTrue();
    });

    test('Should return TRUE if the is dark', () => {
      const { result } = renderHook(() => useTheme('dark'));

      expect(result.current.isLight).toBeFalse();
      expect(result.current.isDark).toBeTrue();
    });
  });
});
