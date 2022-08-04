import React, { useState } from 'react';

import { Img } from 'components/Img';
import { Label } from 'components/Label';
import { Spoiler } from 'components/Spoiler';
import { SlideShow as SlideShowComponent } from 'components/SlideShow';

import { Item } from 'pages/EffectExamples/components/Item';

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
          <Img src="/assets/img/1.jpg" />
          <Img src="/assets/img/2.jpg"/>
          <Img src="/assets/img/3.jpg" />
          <Img src="/assets/img/4.jpg" />
        </SlideShowComponent>
      </Spoiler>
    </Item>
  );
};
