import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { IEvent } from '../common/types/event.type';

interface IEventState {
  event?: IEvent;
  setEvent: (value?: IEvent) => void;
}

export const useEventStore = createWithEqualityFn<IEventState>((set) => {
  return {
    setEvent: (value?: IEvent): void => {
      set(() => {
        return {
          event: value,
        };
      });
    },
  };
}, shallow);
