import { useMusic } from 'activeBook-core/hooks/effects/audio/music';
import { useSideShadow } from 'activeBook-core/hooks/effects/side/shadow';
import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { WithModal } from 'activeBook-core/components/ColoredTextTrigger/WithModal';
import { Img } from 'activeBook-core/components/Img';

export const Page41 = () => {
  useMusic({
    src: '/assets/book_data/audios/music/heaven-music.mp3',
    loop: true,
  });

  useSideShadow({
    color: '#ffd700',
    speed: 10000,
  });

  const EasterEgg = (
    <WithModal text="звук в этом месте " triggerType="egg" eggId="page-41">
      <Img src="/assets/book_data/images/sound-like-heaven-vk.png" />
    </WithModal>
  );

  const Comment = (
    <WithModal text="и предсказуемый образ" triggerType="author" mode="text">
      Тут вспоминается фильм «О, боже», где Бог поступил точно так же с главным героем.
      Милая семейная комедия, рекомендую
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Не успел наш герой ничего ответить, как очутился перед огромными вратами. Золотой цвет которых превращался
        в испускаемый свет. Он стоял будто на огромном розоватом облаке. Короче, всё напоминало тот Рай, который принято
        представлять в обществе. Даже {EasterEgg} исходил какой-то такой.
      </p>
      <p>
        Создатель пояснил, что он хотел создать наиболее понятный {Comment} для Егора. Он поступает так со
        всеми, кто покидает наш мир, чтобы сделать путешествие наиболее мягким.
      </p>
    </PageWrapper>
  );
};
