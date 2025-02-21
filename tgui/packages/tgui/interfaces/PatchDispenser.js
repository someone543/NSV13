import { classes } from 'common/react';
import { useBackend } from '../backend';
import { Box, Button, Input, LabeledList, NumberInput, Section } from '../components';
import { Window } from '../layouts';

export const PatchDispenser = (props, context) => {
  const { act, data } = useBackend(context);
  const {
    patch_size,
    patch_name,
    chosen_patch_style,
    patch_styles = [],
  } = data;
  return (
    <Window
      width={300}
      height={160}>
      <Window.Content>
        <Section>
          <LabeledList>
            <LabeledList.Item label="Patch Volume">
              <NumberInput
                value={patch_size}
                unit="u"
                width="43px"
                minValue={5}
                maxValue={40}
                step={1}
                stepPixelSize={2}
                onChange={(e, value) => act('change_patch_size', {
                  volume: value,
                })} />
            </LabeledList.Item>
            <LabeledList.Item label="Patch Name">
              <Button
                icon="pencil-alt"
                content={patch_name}
                onClick={() => act('change_patch_name')} />
            </LabeledList.Item>
            <LabeledList.Item label="Patch Style">
              {patch_styles.map(each_style => (
                <Button
                  key={each_style.id}
                  width="30px"
                  height="25px"
                  selected={each_style.id === chosen_patch_style}
                  textAlign="center"
                  color="transparent"
                  onClick={() => act('change_patch_style', { id: each_style.id })}>
                  <Box mx={-1}
                    className={classes([
                      'medicine_containers22x22',
                      each_style.patch_icon_name,
                    ])} />
                </Button>
              ))}
            </LabeledList.Item>
          </LabeledList>
        </Section>
      </Window.Content>
    </Window>
  );
};
