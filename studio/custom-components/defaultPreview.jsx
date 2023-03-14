import { Stack, Card } from "@sanity/ui";

const Subtitle = ({children}) => {
    return (
        <span
        style={{
            fontSize: "1.25em",
            paddingTop: ".375em",
            display: "block",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
        }}
        >
        {children}
        </span>
    )
};

export function DefaultPreview(props) {
  return (
    <Stack style={{ cursor: "pointer" }}>
      <Card paddingTop={[1, 1, 2]} paddingBottom={[1, 1, 2]}>
        <Stack space={[2, 2, 3]}>
          {props.renderDefault({ 
            ...props,
            title: props.title,
            subtitle: (props.subtitle && <Subtitle>{props.subtitle}</Subtitle>)
          })}
        </Stack>
      </Card>
    </Stack>
  );
}
