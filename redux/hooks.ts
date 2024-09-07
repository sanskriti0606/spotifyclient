// redux/hooks.ts
import { useDispatch as useDispatchBase, useSelector as useSelectorBase, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store'; // Adjust the path if necessary

// Create a typed version of useDispatch
export const useDispatch = () => useDispatchBase<AppDispatch>();

// Create a typed version of useSelector
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorBase;
