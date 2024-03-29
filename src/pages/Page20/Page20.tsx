import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { ExternalLink as ExtLink } from 'activeBook-core/components/ExternalLink/ExternalLink';
import { WithModal } from 'activeBook-core/components/ColoredTextTrigger/WithModal';
import { Img } from 'activeBook-core/components/Img';

export const Page20 = () => {
  const Link = (
    <ExtLink href="https://ru.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B8%D1%81%D1%81_(%D1%80%D0%BE%D0%BC%D0%B0%D0%BD)">
      Уилисса
    </ExtLink>
  );

  const EasterEgg = (
    <WithModal text="поездка в метро" triggerType="egg" eggId="page-20">
      <Img src="/assets/book_data/gifs/granny-in-hyper.gif" />
    </WithModal>
  );

  const Comment = (
    <WithModal text="любимую книгу Джона Кеннеди." triggerType="author" mode="text">
      Здесь захотелось показать, что в книгу можно вставлять ссылки. Поэтому немного не в тему тут получилось.
      Кстати, ваш покорный слуга на момент написание книги так и не прикоснулся к Уилиссу, но наслышан.
      В будущем планирую исправить эту оплошность
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Но эта непроглядная тьма, окружающая корабль, всегда успокаивала космонавта.
        Вдали от людей, лишь слышно двигатель и стук сердца — это ли не счастье.
      </p>
      <p>
        Придя в себя после кошмарного сна из не менее кошмарного прошлого,
        Егор почувствовал, что пульс его пришёл в норму.
      </p>
      <p>
        Поспать не удалось и нужно придумать иное занятие. На втором месте после сна шли книги.
      </p>
      <p>
        Как ни странно, но даже когда люди научились проецировать видео, звук
        и даже тактильные ощущения с запахами, классический буквенный вид повествования не умер.
      </p>
      <p>
        Достав свой наладонник, космонавт стал выбирать что же ему почитать сегодня.
        Сотни и тысячи книг ждали своей очереди в памяти устройства.
      </p>
      <p>
        Лететь долго, нужно выбрать произведение соответствующей длины. Выбор пал на {Link} за авторством
        Джеймса Джойса, {Comment}
      </p>
      <p>
        Бесконечный хаос мыслей отступил (даже про то смотрит ли она или нет).
      </p>
      <p>
        Можно было даже подумать, будто это просто {EasterEgg}, только долгая и с пустыми вагонами.
      </p>
      <p>
        И телепортацией.
      </p>
    </PageWrapper>
  );
};
