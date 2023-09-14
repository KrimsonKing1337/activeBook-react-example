import { useState } from 'react';

import { Img } from 'activeBook-core/components/Img';
import { Label } from 'activeBook-core/components/Label';
import { Spoiler } from 'activeBook-core/components/Spoiler';
import { SlideShow as SlideShowComponent } from 'activeBook-core/components/SlideShow';
import { Item } from 'demo/EffectExamples/components/Item';

export const SlideShow = () => {
  const [needToSetHeight, setNeedToSetHeight] = useState(false);

  return (
    <Item>
      <Label label="Спойлер со слайдшоу" />

      <Spoiler
        needToSetHeight={needToSetHeight}
        setNeedToSetHeightToFalse={() => setNeedToSetHeight(false)}
        style={{ marginTop: '10px' }}
      >
        <SlideShowComponent isWithoutBorders={true} onSlideChange={() => setNeedToSetHeight(true)}>
          <Img src="/assets/demo_data/img/1.jpg" />
          <Img src="/assets/demo_data/img/2.jpg" />
          <Img src="/assets/demo_data/img/3.jpg" />
          <Img src="/assets/demo_data/img/4.jpg" />
        </SlideShowComponent>
      </Spoiler>
    </Item>
  );
};
