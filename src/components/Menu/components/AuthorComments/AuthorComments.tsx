import { useDispatch, useSelector } from 'activeBook-core/store';
import { configActions, configSelectors } from 'activeBook-core/store/config';

import { Toggle } from 'components/Toggle';
import { playAchievement } from 'components/Menu/utils';

export const AuthorComments = () => {
  const dispatch = useDispatch();

  const authorCommentsState = useSelector(configSelectors.authorComments);

  const toggleClickHandler = (value: boolean) => {
    dispatch(configActions.setAuthorComments(value));

    playAchievement();
  };

  return (
    <Toggle
      label="Комментарии автора"
      isActiveDefault={authorCommentsState}
      onClickOn={() => toggleClickHandler(true)}
      onClickOff={() => toggleClickHandler(false)}
    />
  );
};
