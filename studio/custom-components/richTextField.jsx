import { Stack, Text, Card, Menu } from "@sanity/ui";

export function richTextField(props) {
  return (
    <Stack style={{ resize: "vertical" }} padding={[1,1,1]}>
        Hallo
        {props.renderDefault(props)}
    </Stack>
  );
}
