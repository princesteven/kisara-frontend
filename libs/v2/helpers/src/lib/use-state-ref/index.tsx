import { useRef, useCallback, useState, SetStateAction, Dispatch } from "react";

const isFunction = (setStateAction: any) => {
  return typeof setStateAction === "function";
};

declare type ReadOnlyRefObject<T> = {
  readonly current: T;
};
declare type UseStateRef = {
  <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, ReadOnlyRefObject<S>];
  <S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>, ReadOnlyRefObject<S | undefined>];
};

declare type S1 = {
  <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, ReadOnlyRefObject<S>];
}

export const useStateRef: S1 = (initialState) => {
  const _a = useState(initialState);
  const state = _a[0];
  const setState = _a[1];
  const ref = useRef(state);
  const dispatch = useCallback((setStateAction: any) => {
    ref.current = isFunction(setStateAction) ? setStateAction(ref.current) : setStateAction;
    setState(ref.current)
  }, [])

  return [state, dispatch, ref];
};
