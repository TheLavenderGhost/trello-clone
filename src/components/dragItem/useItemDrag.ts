import { useDrag } from 'react-dnd';
import { useAppState } from '../../app/AppStateContext';
import { DragItem } from './DragItem';

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();

  const [ , drag ] = useDrag({
    type: item.type,
    item: () => [ item, dispatch({
      type: 'setDraggedItem',
      payload: item,
    }) ],
    end: () => dispatch({
      type: 'setDraggedItem',
      payload: undefined,
    }),
  });

  return { drag };
};
